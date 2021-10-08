import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import _ from 'lodash';
import {useContext} from 'react';
import {ElicitationContext} from 'src/ElicitationContext/ElicitationContext';
import ICriterion from 'src/Interface/ICriterion';
import {UNRANKED} from 'src/RankingUtil/RankingUtil';
import {canBePercentage, getBest, getWorst} from 'src/Util/util';
import CriterionSituation from '../../CriterionSituation/CriterionSituation';

export default function RankingSituation() {
  const {rankings, showPercentages, pvfs, criteria} =
    useContext(ElicitationContext);

  function getValueToDisplay(criterion: ICriterion) {
    const unitType = criterion.dataSources[0].unitOfMeasurement.type;
    const usePercentage = showPercentages && canBePercentage(unitType);
    return !rankings[criterion.id] || rankings[criterion.id].rank === UNRANKED
      ? getWorst(pvfs[criterion.id], usePercentage)
      : getBest(pvfs[criterion.id], usePercentage);
  }

  function renderCriterionSituations(): JSX.Element[] {
    return _.map(
      criteria,
      (criterion: ICriterion): JSX.Element => (
        <CriterionSituation
          key={criterion.id}
          criterion={criterion}
          displayValue={getValueToDisplay(criterion)}
        />
      )
    );
  }

  return (
    <Grid container item spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">Given the following situation:</Typography>
      </Grid>
      <Grid item xs={12}>
        {renderCriterionSituations()}
      </Grid>
    </Grid>
  );
}
