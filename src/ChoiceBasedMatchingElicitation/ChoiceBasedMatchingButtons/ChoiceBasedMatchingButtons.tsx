import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import React, {useContext, useEffect, useState} from 'react';
import {ElicitationContext} from 'src/ElicitationContext/ElicitationContext';
import AsyncSingleClickButton from 'src/Util/AsyncSingleClickButton';
import {ChoiceBasedMatchingContext} from '../ChoiceBasedMatchingContext';

export default function ChoiceBasedMatchingButtons() {
  const {
    previousCallback,
    currentStep,
    setCurrentStep,
    saveCallback,
    cancelCallback
  } = useContext(ElicitationContext);

  const {cbmState, currentAnswer, goBack, updateState, isStateLoading} =
    useContext(ChoiceBasedMatchingContext);

  const [isNextDisabled, setIsNextDisabled] = useState(true);

  useEffect(checkIsNextEnabled, [currentAnswer, cbmState]);

  function checkIsNextEnabled() {
    setIsNextDisabled(currentAnswer === '' && !cbmState.preferences);
  }

  function handleNextButtonClick(): void {
    setCurrentStep(currentStep + 1);
    updateState();
  }

  function handleSaveButtonClick(): Promise<any> {
    return saveCallback(cbmState.preferences);
  }

  function handlePreviousClick() {
    if (currentStep === 1) {
      previousCallback();
    } else {
      setCurrentStep(currentStep - 1);
      setIsNextDisabled(false);
      goBack();
    }
  }

  function cancel(): void {
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
        disabled={(!previousCallback && currentStep === 1) || isStateLoading}
      >
        Previous
      </Button>
      {cbmState.preferences ? (
        <AsyncSingleClickButton
          disabled={isNextDisabled || isStateLoading}
          color="primary"
          id="save-button"
          variant="contained"
          asyncFunction={handleSaveButtonClick}
        >
          Save
        </AsyncSingleClickButton>
      ) : (
        <Button
          disabled={isNextDisabled || isStateLoading}
          color="primary"
          id="next-button"
          variant="contained"
          onClick={handleNextButtonClick}
        >
          Next
        </Button>
      )}
    </ButtonGroup>
  );
}
