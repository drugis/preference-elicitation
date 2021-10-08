import Slider from '@material-ui/core/Slider';
import {useContext, useEffect, useState} from 'react';
import {ElicitationContext} from 'src/ElicitationContext/ElicitationContext';
import {calculateImportance} from 'src/MatchingUtil/MatchingUtil';
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
    getCriterion,
    stepSizesByCriterion
  } = useContext(ElicitationContext);

  const mostImportantCriterion = getCriterion(mostImportantCriterionId);
  const pvf = pvfs[mostImportantCriterionId];
  const worstValue = getWorst(pvf, false);
  const stepSize = stepSizesByCriterion[mostImportantCriterionId];
  const minSliderValue =
    pvf.range[0] === worstValue ? pvf.range[0] + stepSize : pvf.range[0];
  const maxSliderValue =
    pvf.range[1] === worstValue ? pvf.range[1] - stepSize : pvf.range[1];

  const unitType = mostImportantCriterion.dataSources[0].unitOfMeasurement.type;
  const usePercentage = showPercentages && canBePercentage(unitType);

  const [sliderValue, setSliderValue] = useState<number>(
    getBest(pvfs[mostImportantCriterionId], usePercentage)
  );

  useEffect(() => {
    const sliderValue = getBest(pvf, false);
    setSliderValue(sliderValue);
    setPreference(currentCriterionId, calculateImportance(sliderValue, pvf));
  }, [currentStep]);

  function handleSliderChanged(
    event: React.ChangeEvent<any>,
    newValue: number
  ) {
    setSliderValue(newValue);
    setIsNextDisabled(significantDigits(newValue) === worstValue);
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
        min={minSliderValue}
        max={maxSliderValue}
        onChange={handleSliderChanged}
        step={stepSize}
      />
    </>
  );
}
