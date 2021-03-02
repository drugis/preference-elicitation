import Grid from '@material-ui/core/Grid';
import RadioGroup from '@material-ui/core/RadioGroup';
import Typography from '@material-ui/core/Typography';
import _ from 'lodash';
import React, {ChangeEvent, useContext} from 'react';
import {ElicitationContext} from 'src/ElicitationContext/ElicitationContext';
import ICriterion from 'src/Interface/ICriterion';
import {UNRANKED} from 'src/RankingUtil/RankingUtil';
import CriterionChoice from '../../CriterionChoice/CriterionChoice';

export default function RankingChoices({
  selectedCriterionId,
  handleSelection
}: {
  selectedCriterionId: string;
  handleSelection: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  const {rankings, criteria} = useContext(ElicitationContext);
  const filteredCriteria = _.filter(
    criteria,
    (criterion: ICriterion): boolean =>
      !rankings[criterion.id] || rankings[criterion.id].rank === UNRANKED
  );

  return (
    <Grid container item spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">
          Which of the following improvements is most important?
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <RadioGroup
          name="ranking-criterion-radio"
          value={selectedCriterionId}
          onChange={handleSelection}
        >
          {_.map(filteredCriteria, (criterion) => (
            <CriterionChoice key={criterion.id} criterion={criterion} />
          ))}
        </RadioGroup>
      </Grid>
    </Grid>
  );
}
