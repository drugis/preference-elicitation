import {Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import _ from 'lodash';
import React, {useContext} from 'react';
import {ChoiceBasedMatchingContext} from 'src/ChoiceBasedMatchingElicitation/ChoiceBasedMatchingContext';
import {ElicitationContext} from 'src/ElicitationContext/ElicitationContext';
import {canBePercentage} from 'src/Util/util';
import IChoiceBasedMatchingQuestion from '../../IChoiceBasedMatchingQuestion';
import PieChartView from './PieChartView/PieChartView';
import ValueView from './ValueView/ValueView';

export default function ChoiceBasedMatchingQuestion({
  currentQuestion
}: {
  currentQuestion: IChoiceBasedMatchingQuestion;
}) {
  const {criteria, showCbmPieChart} = useContext(ElicitationContext);
  const {cbmState, totalSteps} = useContext(ChoiceBasedMatchingContext);
  const questionNumber = cbmState.answersAndQuestions.length;

  const canCriterion1BePercentage = canBePercentage(
    _.find(criteria, ['id', currentQuestion.criterionIds[0]]).dataSources[0]
      .unitOfMeasurement.type
  );
  const canCriterion2BePercentage = canBePercentage(
    _.find(criteria, ['id', currentQuestion.criterionIds[1]]).dataSources[0]
      .unitOfMeasurement.type
  );
  const showPieChart =
    showCbmPieChart && canCriterion1BePercentage && canCriterion2BePercentage;

  return currentQuestion ? (
    <>
      <Grid item xs={12}>
        <Typography variant="h6">Choosing between treatments</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          <b>
            Q{questionNumber} of {totalSteps}:
          </b>{' '}
          Please consider the following two treatment options, A and B:
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Criterion</TableCell>
              <TableCell>Units</TableCell>
              <TableCell>Treatment A</TableCell>
              <TableCell>Treatment B</TableCell>
            </TableRow>
          </TableHead>
          {showPieChart ? (
            <PieChartView currentQuestion={currentQuestion} />
          ) : (
            <ValueView currentQuestion={currentQuestion} />
          )}
        </Table>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Based on this information, which treatment would you prefer?
        </Typography>
      </Grid>
    </>
  ) : (
    <></>
  );
}
