import Slider from '@material-ui/core/Slider';
import React, {useContext, useEffect, useState} from 'react';
import {ElicitationContext} from 'src/ElicitationContext/ElicitationContext';
import {
  calculateImportance,
  determineStepSize
} from 'src/MatchingUtil/MatchingUtil';
import significantDigits, {
  canBePercentage,
  getBest,
  getWorst
} from 'src/Util/util';

export default function MatchingSlider({
  currentCriterionId
}: {
  currentCriterionId: string;
}) {
  const {
    currentStep,
    setIsNextDisabled,
    mostImportantCriterionId,
    setPreference,
    showPercentages,
    pvfs,
    getCriterion
  } = useContext(ElicitationContext);

  const mostImportantCriterion = getCriterion(mostImportantCriterionId);
  const pvf = pvfs[mostImportantCriterionId];

  const unitType = mostImportantCriterion.dataSources[0].unitOfMeasurement.type;
  const usePercentage = showPercentages && canBePercentage(unitType);

  const [sliderValue, setSliderValue] = useState<number>(
    getBest(pvfs[mostImportantCriterionId], usePercentage)
  );
  const [stepSize, setStepSize] = useState<number>();

  useEffect(() => {
    const sliderValue = getBest(pvf, false);
    setSliderValue(sliderValue);
    setPreference(currentCriterionId, calculateImportance(sliderValue, pvf));
  }, [currentStep]);

  useEffect(() => {
    setStepSize(determineStepSize(pvf.range));
  }, []);

  function handleSliderChanged(
    event: React.ChangeEvent<any>,
    newValue: number
  ) {
    setSliderValue(newValue);
    setIsNextDisabled(
      significantDigits(newValue) ===
        getWorst(pvfs[mostImportantCriterion.id], false)
    );
    setPreference(currentCriterionId, calculateImportance(newValue, pvf));
  }

  function displayValue() {
    return usePercentage
      ? significantDigits(sliderValue * 100)
      : significantDigits(sliderValue);
  }

  return (
    <>
      {displayValue()}
      <Slider
        id="matching-slider"
        value={sliderValue}
        min={pvf.range[0]}
        max={pvf.range[1]}
        onChange={handleSliderChanged}
        step={stepSize}
      />
    </>
  );
}
