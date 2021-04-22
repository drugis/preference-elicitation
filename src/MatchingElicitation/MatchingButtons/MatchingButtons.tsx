import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import _ from 'lodash';
import React, {useContext} from 'react';
import {ElicitationContext} from 'src/ElicitationContext/ElicitationContext';

export default function MatchingButtons() {
  const {
    previousCallback,
    isNextDisabled,
    setIsNextDisabled,
    currentStep,
    setCurrentStep,
    preferences,
    criteria,
    cancelCallback,
    saveCallback
  } = useContext(ElicitationContext);

  function handleNextButtonClick(): void {
    matchingNext();
  }

  function handleSaveButtonclick(): void {
    saveCallback(Object.values(preferences));
  }

  function matchingNext(): void {
    setCurrentStep(currentStep + 1);
  }

  function isLastStep() {
    return currentStep === _.size(criteria);
  }

  function handlePreviousClick(): void {
    if (currentStep === 1) {
      previousCallback();
    } else {
      setIsNextDisabled(false);
      setCurrentStep(currentStep - 1);
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
        disabled={!previousCallback && currentStep === 1}
      >
        Previous
      </Button>
      {isLastStep() ? (
        <Button
          disabled={isNextDisabled}
          color="primary"
          id="save-button"
          variant="contained"
          onClick={handleSaveButtonclick}
        >
          Save
        </Button>
      ) : (
        <Button
          disabled={isNextDisabled}
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
