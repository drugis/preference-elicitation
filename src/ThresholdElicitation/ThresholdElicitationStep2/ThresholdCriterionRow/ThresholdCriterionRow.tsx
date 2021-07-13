import {TableCell, TableRow} from '@material-ui/core';
import React from 'react';
import ICriterion from 'src/Interface/ICriterion';
import ThresholdElicitationStep2ValueInput from './ThresholdElicitationStep2ValueInput/ThresholdElicitationStep2ValueInput';

export default function ThresholdCriterionRow({
  criterion
}: {
  criterion: ICriterion;
}): JSX.Element {
  return (
    <TableRow>
      <TableCell id={`criterion-title-${criterion.id}`}>
        {criterion.title}
      </TableCell>
      <TableCell align="center" width="500px">
        <ThresholdElicitationStep2ValueInput criterion={criterion} />
      </TableCell>
    </TableRow>
  );
}
