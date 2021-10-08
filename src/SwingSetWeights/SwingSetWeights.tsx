import {Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import {useContext, useEffect, useState} from 'react';
import {ElicitationContext} from 'src/ElicitationContext/ElicitationContext';
import {getSwingStatement} from 'src/SwingUtil/SwingUtil';
import {canBePercentage} from 'src/Util/util';
import OverviewTable from './OverviewTable/OverviewTable';

export default function SwingSetWeights() {
  const {
    pvfs,
    showPercentages,
    mostImportantCriterionId,
    elicitationMethod,
    getCriterion,
    template
  } = useContext(ElicitationContext);

  const criterion = getCriterion(mostImportantCriterionId);
  const usePercentage =
    showPercentages &&
    canBePercentage(criterion.dataSources[0].unitOfMeasurement.type);

  const [statement, setStatement] = useState<string>(
    getSwingStatement(criterion, pvfs[criterion.id], usePercentage, template)
  );

  useEffect(() => {
    setStatement(
      getSwingStatement(criterion, pvfs[criterion.id], usePercentage, template)
    );
  }, [showPercentages, template, criterion]);

  return (
    <Grid container item spacing={2}>
      <Grid item xs={12} id={`${elicitationMethod}-swing-statement`}>
        <Typography dangerouslySetInnerHTML={{__html: statement}}></Typography>
      </Grid>
      <Grid item xs={12}>
        <OverviewTable />
      </Grid>
    </Grid>
  );
}
