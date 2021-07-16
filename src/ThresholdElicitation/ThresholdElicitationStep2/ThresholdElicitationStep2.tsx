import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import _ from 'lodash';
import React, {useContext} from 'react';
import {ElicitationContext} from 'src/ElicitationContext/ElicitationContext';
import ICriterion from 'src/Interface/ICriterion';
import {
  canBePercentage,
  getPercentifiedValueLabel,
  getUnitLabel
} from 'src/Util/util';
import {ThresholdElicitationContext} from '../ThresholdElicitationContext';
import ThresholdCriterionRow from './ThresholdCriterionRow/ThresholdCriterionRow';

export default function ThresholdElicitationStep2(): JSX.Element {
  const {
    equivalentChangeForReferenceCriterion,
    direction,
    mostImportantCriterionId
  } = useContext(ThresholdElicitationContext);
  const {showPercentages, criteria, getCriterion} =
    useContext(ElicitationContext);
  const referenceCriterion = getCriterion(mostImportantCriterionId);
  const usePercentages =
    showPercentages &&
    canBePercentage(referenceCriterion.dataSources[0].unitOfMeasurement.type);

  function renderCriterionRows(): JSX.Element[] {
    return _(criteria)
      .reject(['id', mostImportantCriterionId])
      .map(
        (criterion: ICriterion): JSX.Element => (
          <ThresholdCriterionRow key={criterion.id} criterion={criterion} />
        )
      )
      .value();
  }

  function generateStatement(): string {
    const changeAmount = getPercentifiedValueLabel(
      equivalentChangeForReferenceCriterion,
      usePercentages
    );
    const unitLabel = getUnitLabel(
      referenceCriterion.dataSources[0].unitOfMeasurement,
      showPercentages
    );
    const theQuestion =
      direction === 'improvement'
        ? `What is the maximal acceptable worsening of this criterion, given the improvement in ${referenceCriterion.title} by ${changeAmount} ${unitLabel}`
        : `What is the minimum improvement in this criterion that would make the worsening in ${referenceCriterion.title} by ${changeAmount} ${unitLabel} acceptable`;

    return `For each other criterion, adjust its value so that it answers the question '${theQuestion}?'`;
  }

  return (
    <Grid container>
      <Grid item xs={12} id="threshold-elicitation-statement">
        <Typography>{generateStatement()}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Criterion</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderCriterionRows()}</TableBody>
        </Table>
      </Grid>
    </Grid>
  );
}
