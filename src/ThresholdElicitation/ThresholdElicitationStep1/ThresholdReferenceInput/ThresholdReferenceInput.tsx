import {InputAdornment, TextField} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React, {ChangeEvent, useContext, useState} from 'react';
import {ElicitationContext} from 'src/ElicitationContext/ElicitationContext';
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
import {ThresholdElicitationContext} from '../../ThresholdElicitationContext';

export default function ThresholdReferenceInput(): JSX.Element {
  const {getCriterion, showPercentages, stepSizesByCriterion} =
    useContext(ElicitationContext);
  const {
    direction,
    mostImportantCriterionId,
    equivalentChangeForReferenceCriterion,
    setEquivalentChangeForReferenceCriterion,
    setIsInvalidReferenceValue
  } = useContext(ThresholdElicitationContext);
  const [inputError, setInputError] = useState<string>('');

  const referenceCriterion = getCriterion(mostImportantCriterionId);
  const unit = referenceCriterion.dataSources[0].unitOfMeasurement;
  const usePercentage = showPercentages && canBePercentage(unit.type);
  const unitLabel: string = getUnitLabel(unit, showPercentages);
  const [value, setValue] = useState<number>(
    percentify(usePercentage, equivalentChangeForReferenceCriterion)
  );

  const minValue = unit.lowerBound === null ? -Infinity : unit.lowerBound;
  const maxValue =
    unit.upperBound === null ? Infinity : getUpperBound(usePercentage, unit);
  const stepSize = percentify(
    usePercentage,
    stepSizesByCriterion[referenceCriterion.id]
  );

  function handleValueChanged(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    const newValue = Number.parseFloat(event.target.value);
    const error = getThresholdValueError(newValue, minValue, maxValue);
    setInputError(error);
    setIsInvalidReferenceValue(Boolean(error));
    setValue(newValue);
    if (!error) {
      setEquivalentChangeForReferenceCriterion(
        depercentify(usePercentage, newValue)
      );
    }
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h6">
          {`By how much ${unitLabel} should ${referenceCriterion.title} ${
            direction === 'worsening' ? 'worsen' : 'improve'
          }?`}
        </Typography>
      </Grid>
      <Grid container item xs={12} alignItems="center">
        <Grid item xs={12}>
          <TextField
            id={`input-reference-value`}
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
    </Grid>
  );
}
