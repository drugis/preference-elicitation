import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import React, {useContext} from 'react';
import {ElicitationContext} from 'src/ElicitationContext/ElicitationContext';

export default function SwingButtons() {
  const {
    previousCallback,
    currentStep,
    setCurrentStep,
    isNextDisabled,
    preferences,
    cancelCallback,
    saveCallback
  } = useContext(ElicitationContext);

  function handleNextButtonClick() {
    setCurrentStep(currentStep + 1);
  }

  function handlePreviousClick() {
    if (currentStep === 1) {
      previousCallback();
    } else {
      setCurrentStep(currentStep - 1);
    }
  }

  function cancel() {
    cancelCallback();
  }

  function handleSaveButtonClick() {
    saveCallback(Object.values(preferences));
  }

  function isLastStep() {
    return currentStep === 2;
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
          onClick={handleSaveButtonClick}
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
