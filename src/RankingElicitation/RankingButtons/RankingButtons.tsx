import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import _ from 'lodash';
import React, {useContext} from 'react';
import {ElicitationContext} from 'src/ElicitationContext/ElicitationContext';
import IRankingAnswer from 'src/Interface/IRankingAnswer';
import {
  assignMissingRankings,
  buildRankingPreferences,
  findCriterionIdForRank,
  UNRANKED
} from 'src/RankingUtil/RankingUtil';
import AsyncSingleClickButton from 'src/Util/AsyncSingleClickButton';

export default function RankingButtons({
  selectedCriterionId,
  setSelectedCriterionId
}: {
  selectedCriterionId: string;
  setSelectedCriterionId: (criterionId: string) => void;
}) {
  const {
    previousCallback,
    currentStep,
    setRanking,
    setCurrentStep,
    rankings,
    criteria,
    cancelCallback,
    saveCallback
  } = useContext(ElicitationContext);

  function handleNextButtonClick() {
    setRanking(selectedCriterionId, currentStep);
    setSelectedCriterionId('');
    setCurrentStep(currentStep + 1);
  }

  function handleSaveButtonClick(): Promise<any> {
    const finishedRankings: Record<string, IRankingAnswer> =
      assignMissingRankings(
        rankings,
        selectedCriterionId,
        currentStep,
        criteria
      );
    const preferences = buildRankingPreferences(_.toArray(finishedRankings));
    return saveCallback(preferences);
  }

  function handlePreviousClick() {
    if (currentStep === 1) {
      previousCallback();
    } else {
      if (currentStep !== 1) {
        removeRankFromCriterion();
      }
      setSelectedCriterionId('');
      setCurrentStep(currentStep - 1);
    }
  }

  function removeRankFromCriterion() {
    const lookupRank = currentStep - 1;
    const criterionId = findCriterionIdForRank(criteria, rankings, lookupRank);
    setRanking(criterionId, UNRANKED);
  }

  function isLastStep(): boolean {
    return currentStep === _.size(criteria) - 1;
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
      {isLastStep() ? (
        <AsyncSingleClickButton
          disabled={!selectedCriterionId}
          color="primary"
          id="save-button"
          variant="contained"
          asyncFunction={handleSaveButtonClick}
        >
          Save
        </AsyncSingleClickButton>
      ) : (
        <Button
          disabled={!selectedCriterionId}
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
