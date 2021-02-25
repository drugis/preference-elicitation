import Grid from '@material-ui/core/Grid';
import React, {useContext, useEffect, useState} from 'react';
import {ElicitationContext} from 'src/ElicitationContext/ElicitationContext';
import {getSwingStatement} from 'src/ElicitationUtil/ElicitationUtil';
import OverviewTable from './OverviewTable/OverviewTable';

export default function SwingSetWeights() {
  const {
    pvfs,
    showPercentages,
    mostImportantCriterionId,
    elicitationMethod,
    getCriterion
  } = useContext(ElicitationContext);

  const [statement, setStatement] = useState<string>(
    getSwingStatement(
      getCriterion(mostImportantCriterionId),
      pvfs[mostImportantCriterionId],
      showPercentages
    )
  );

  useEffect(() => {
    setStatement(
      getSwingStatement(
        getCriterion(mostImportantCriterionId),
        pvfs[mostImportantCriterionId],
        showPercentages
      )
    );
  }, [showPercentages]);

  return (
    <Grid container item spacing={2}>
      <Grid
        item
        xs={12}
        id={`${elicitationMethod}-swing-statement`}
        dangerouslySetInnerHTML={{__html: statement}}
      />
      <Grid item xs={12}>
        <OverviewTable />
      </Grid>
    </Grid>
  );
}
