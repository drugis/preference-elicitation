import {InputAdornment, TextField} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import {ChangeEvent, useContext, useState} from 'react';
import {ElicitationContext} from 'src/ElicitationContext/ElicitationContext';
import ICriterion from 'src/Interface/ICriterion';
import {
  getThresholdValueError,
  getUpperBound
} from 'src/ThresholdElicitation/ThresholdElicitationUtil';
import {
  canBePercentage,
  depercentify,
  getUnitLabel,
  percentify
} from 'src/Util/util';
import {ThresholdElicitationContext} from '../../../ThresholdElicitationContext';

export default function ThresholdElicitationStep2ValueInput({
  criterion
}: {
  criterion: ICriterion;
}): JSX.Element {
  const {showPercentages, stepSizesByCriterion} =
    useContext(ElicitationContext);

  const {setCriterionInputValue, getInputValueForCriterion, setIsValidValue} =
    useContext(ThresholdElicitationContext);

  const [initialValue] = useState(getInputValueForCriterion(criterion.id));
  const [inputError, setInputError] = useState<string>(
    initialValue === 0 ? 'Value cannot be 0' : ''
  );

  const unit = criterion.dataSources[0].unitOfMeasurement;
  const usePercentage = showPercentages && canBePercentage(unit.type);
  const [value, setValue] = useState<number>(
    percentify(usePercentage, initialValue)
  );
  const minValue = unit.lowerBound === null ? -Infinity : unit.lowerBound;
  const maxValue =
    unit.upperBound === null ? Infinity : getUpperBound(usePercentage, unit);
  const stepSize = percentify(
    usePercentage,
    stepSizesByCriterion[criterion.id]
  );

  function handleValueChanged(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    const newValue = Number.parseFloat(event.target.value);
    const error = getThresholdValueError(newValue, minValue, maxValue);
    setInputError(error);
    setValue(newValue);
    setIsValidValue(criterion.id, !error);
    if (!error) {
      setCriterionInputValue(
        criterion.id,
        depercentify(usePercentage, newValue)
      );
    }
  }

  return (
    <Grid container spacing={2} justify="center">
      <Grid item xs={12}>
        <TextField
          id={`input-${criterion.id}`}
          value={value}
          onChange={handleValueChanged}
          type="number"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {getUnitLabel(unit, showPercentages)}
              </InputAdornment>
            )
          }}
          inputProps={{
            min: minValue,
            max: maxValue,
            step: stepSize
          }}
          error={Boolean(inputError)}
          helperText={inputError}
        />
      </Grid>
    </Grid>
  );
}
