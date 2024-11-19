import {TableBody, TableCell, TableRow, Tooltip} from '@material-ui/core';
import React, {useContext} from 'react';
import IChoiceBasedMatchingQuestion from 'src/ChoiceBasedMatchingElicitation/IChoiceBasedMatchingQuestion';
import {ElicitationContext} from 'src/ElicitationContext/ElicitationContext';
import ICriterionInfo from '../ICriterionInfo ';
import PieChart from './PieChart/PieChart';

export default function PieChartView({
  currentQuestion
}: {
  currentQuestion: IChoiceBasedMatchingQuestion;
}): JSX.Element {
  const {getCriterionInfo} = useContext(ElicitationContext);

  const criterionInfo1: ICriterionInfo = getCriterionInfo(
    currentQuestion.criterionIds[0]
  );
  const criterionInfo2: ICriterionInfo = getCriterionInfo(
    currentQuestion.criterionIds[1]
  );

  return (
    <TableBody>
      <TableRow>
        <TableCell>
          <Tooltip
            disableHoverListener={!criterionInfo1.description}
            title={criterionInfo1.description}
          >
            <span id="criterion1-title" className="criterion-title">
              {criterionInfo1.title}
            </span>
          </Tooltip>
        </TableCell>
        <TableCell id="criterion1-unit">
          {criterionInfo1.unitOfMeasurement}
        </TableCell>
        <TableCell id="criterion1-value-A">
          <PieChart
            value={currentQuestion.A.criterion1Value}
            id="criterion1-value-A"
          />
        </TableCell>
        <TableCell id="criterion1-value-B">
          <PieChart
            value={currentQuestion.B.criterion1Value}
            id="criterion1-value-B"
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <Tooltip
            disableHoverListener={!criterionInfo2.description}
            title={criterionInfo2.description}
          >
            <span id="criterion2-title" className="criterion-title">
              {criterionInfo2.title}
            </span>
          </Tooltip>
        </TableCell>
        <TableCell id="criterion2-unit">
          {criterionInfo2.unitOfMeasurement}
        </TableCell>
        <TableCell id="criterion2-value-A">
          <PieChart
            value={currentQuestion.A.criterion2Value}
            id="criterion2-value-A"
          />
        </TableCell>
        <TableCell id="criterion2-value-B">
          <PieChart
            value={currentQuestion.B.criterion2Value}
            id="criterion2-value-B"
          />
        </TableCell>
      </TableRow>
    </TableBody>
  );
}
