import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import _ from 'lodash';
import React, {ChangeEvent, useContext} from 'react';
import {ElicitationContext} from 'src/ElicitationContext/ElicitationContext';
import ICriterion from 'src/Interface/ICriterion';
import {ThresholdElicitationContext} from '../../ThresholdElicitationContext';

export default function ReferenceCriterionChoice(): JSX.Element {
  const {criteria, setIsNextDisabled} = useContext(ElicitationContext);
  const {mostImportantCriterionId, setMostImportantCriterionId} = useContext(
    ThresholdElicitationContext
  );

  function handleReferenceChange(event: ChangeEvent<HTMLInputElement>) {
    setMostImportantCriterionId(event.target.value);
    setIsNextDisabled(false);
  }

  function buildCriterionOptions(): JSX.Element[] {
    return [
      <option key="default-choice" value="" disabled>
        Please select an option
      </option>,
      ..._.map(
        criteria,
        (criterion: ICriterion): JSX.Element => (
          <option value={criterion.id} key={criterion.id}>
            {criterion.title}
          </option>
        )
      )
    ];
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h6">
          Choose a criterion to use as reference:
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Select
          native
          id="threshold-reference-criterion-selector"
          value={mostImportantCriterionId ? mostImportantCriterionId : ''}
          onChange={handleReferenceChange}
        >
          {buildCriterionOptions()}
        </Select>
      </Grid>
    </Grid>
  );
}
