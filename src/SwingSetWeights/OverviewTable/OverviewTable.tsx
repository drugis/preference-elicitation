import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import _ from 'lodash';
import React, {useContext} from 'react';
import {ElicitationContext} from 'src/ElicitationContext/ElicitationContext';
import ICriterion from 'src/Interface/ICriterion';
import CriterionOverview from './CriterionOverview/CriterionOverview';

export default function OverviewTable() {
  const {criteria} = useContext(ElicitationContext);

  function renderCriterionOverviews(): JSX.Element[] {
    return _.map(
      criteria,
      (criterion: ICriterion): JSX.Element => (
        <CriterionOverview key={criterion.id} criterion={criterion} />
      )
    );
  }

  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>Criterion</TableCell>
          <TableCell>Unit</TableCell>
          <TableCell align="center">Worst</TableCell>
          <TableCell align="center">Best</TableCell>
          <TableCell align="center">Importance</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>{renderCriterionOverviews()}</TableBody>
    </Table>
  );
}
