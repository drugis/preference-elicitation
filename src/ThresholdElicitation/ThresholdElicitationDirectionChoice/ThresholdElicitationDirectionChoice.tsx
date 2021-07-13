import {FormControlLabel} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Typography from '@material-ui/core/Typography';
import React, {ChangeEvent, useContext} from 'react';
import {ElicitationContext} from 'src/ElicitationContext/ElicitationContext';
import {ThresholdElicitationContext} from '../ThresholdElicitationContext';
import {TThresholdChangeDirection} from '../TThresholdChangeDirection';

export default function ThresholdElicitationDirectionChoice(): JSX.Element {
  const {direction, mostImportantCriterionId, setDirection} = useContext(
    ThresholdElicitationContext
  );
  const {getCriterion} = useContext(ElicitationContext);
  const referenceCriterion = getCriterion(mostImportantCriterionId);

  function handleDirectionChange(event: ChangeEvent<HTMLInputElement>) {
    setDirection(event.target.value as TThresholdChangeDirection);
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h6">
          {`What type of change in ${referenceCriterion.title} should be used as basis for comparison with other criteria?`}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <RadioGroup
          id="improvement-or-worsening-radio"
          value={direction ? direction : ''}
          onChange={handleDirectionChange}
        >
          <FormControlLabel
            id="worsening"
            control={<Radio value={'worsening'} />}
            label="Worsening"
          />
          <FormControlLabel
            id="improvement"
            control={<Radio value={'improvement'} />}
            label="Improvement"
          />
        </RadioGroup>
      </Grid>
    </Grid>
  );
}
