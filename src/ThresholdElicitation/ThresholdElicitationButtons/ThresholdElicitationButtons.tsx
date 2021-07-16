import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import _ from 'lodash';
import React, {useContext} from 'react';
import {ElicitationContext} from 'src/ElicitationContext/ElicitationContext';
import AsyncSingleClickButton from 'src/Util/AsyncSingleClickButton';
import {ThresholdElicitationContext} from '../ThresholdElicitationContext';
import {buildThresholdPreferences} from '../ThresholdElicitationUtil';

export default function ThresholdElicitationButtons(): JSX.Element {
  const {
    previousCallback,
    pvfs,
    setCurrentStep,
    saveCallback,
    cancelCallback,
    currentStep
  } = useContext(ElicitationContext);
  const {
    mostImportantCriterionId,
    direction,
    equivalentChangeForReferenceCriterion,
    inputValuesByCriterion,
    isSaveButtonDisabled,
    setIsSaveButtonDisabled,
    isInvalidReferenceValue
  } = useContext(ThresholdElicitationContext);

  function handleNextButtonClick() {
    if (
      _.some(inputValuesByCriterion, (inputValue: number) => inputValue === 0)
    ) {
      setIsSaveButtonDisabled(true);
    } else {
      setIsSaveButtonDisabled(false);
    }
    setCurrentStep(2);
  }

  function handleSaveButtonClick(): Promise<any> {
    const thresholdValuesByCriterion: Record<string, number> = _.merge(
      {},
      inputValuesByCriterion,
      {
        [mostImportantCriterionId]: equivalentChangeForReferenceCriterion
      }
    );
    const preferences = buildThresholdPreferences(
      mostImportantCriterionId,
      equivalentChangeForReferenceCriterion,
      inputValuesByCriterion,
      pvfs
    );
    return saveCallback(preferences, thresholdValuesByCriterion);
  }

  function handlePreviousClick() {
    if (currentStep === 1) {
      previousCallback();
    } else {
      setCurrentStep(1);
    }
  }

  function cancel() {
    cancelCallback();
  }

  return (
    <ButtonGroup size="small">
      {cancelCallback ? (
        <Button
          id="cancel-button"
          color="secondary"
          variant="contained"
          onClick={cancel}
        >
          Cancel
        </Button>
      ) : (
        <></>
      )}
      <Button
        id="previous-button"
        onClick={handlePreviousClick}
        color="primary"
        variant="contained"
        disabled={!previousCallback && currentStep === 1}
      >
        Previous
      </Button>
      {currentStep === 1 ? (
        <Button
          disabled={
            !mostImportantCriterionId || !direction || isInvalidReferenceValue
          }
          color="primary"
          id="next-button"
          variant="contained"
          onClick={handleNextButtonClick}
        >
          Next
        </Button>
      ) : (
        <AsyncSingleClickButton
          disabled={isSaveButtonDisabled}
          color="primary"
          id="save-button"
          variant="contained"
          asyncFunction={handleSaveButtonClick}
        >
          Save
        </AsyncSingleClickButton>
      )}
    </ButtonGroup>
  );
}
