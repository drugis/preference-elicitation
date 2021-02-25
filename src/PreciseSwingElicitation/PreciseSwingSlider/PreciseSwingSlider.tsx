import Slider from '@material-ui/core/Slider';
import React, {useContext, useEffect, useState} from 'react';
import {ElicitationContext} from 'src/ElicitationContext/ElicitationContext';
import significantDigits from 'src/ElicitationUtil/ElicitationUtil';
import ICriterion from 'src/Interface/ICriterion';

export default function PreciseSwingSlider({
  criterion
}: {
  criterion: ICriterion;
}) {
  const [sliderValue, setSliderValue] = useState<number>(100);
  const {setPreference, mostImportantCriterionId} = useContext(
    ElicitationContext
  );

  useEffect(() => {
    setPreference(criterion.id, sliderValue);
  }, [mostImportantCriterionId]);

  function handleSliderChanged(
    event: React.ChangeEvent<any>,
    newValue: number
  ) {
    setSliderValue(newValue);
    setPreference(criterion.id, newValue);
  }

  return (
    <>
      {significantDigits(sliderValue)}
      <Slider
        value={sliderValue}
        min={1}
        max={100}
        onChange={handleSliderChanged}
        step={1}
        disabled={mostImportantCriterionId === criterion.id}
      />
    </>
  );
}
