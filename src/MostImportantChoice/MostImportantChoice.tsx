import Grid from '@material-ui/core/Grid';
import RadioGroup from '@material-ui/core/RadioGroup';
import Typography from '@material-ui/core/Typography';
import _ from 'lodash';
import {ChangeEvent, useContext} from 'react';
import {ElicitationContext} from 'src/ElicitationContext/ElicitationContext';
import ICriterion from 'src/Interface/ICriterion';
import {canBePercentage, getWorst} from 'src/Util/util';
import CriterionChoice from '../CriterionChoice/CriterionChoice';
import CriterionSituation from '../CriterionSituation/CriterionSituation';

export default function MostImportantChoice() {
  const {
    mostImportantCriterionId,
    setMostImportantCriterionId,
    setIsNextDisabled,
    showPercentages,
    pvfs,
    criteria
  } = useContext(ElicitationContext);

  function handleSelection(event: ChangeEvent<HTMLInputElement>) {
    setMostImportantCriterionId(event.target.value);
    setIsNextDisabled(false);
  }

  function renderCriterionSituations(): JSX.Element[] {
    return _.map(criteria, (criterion: ICriterion): JSX.Element => {
      const unitType = criterion.dataSources[0].unitOfMeasurement.type;
      const usePercentage = showPercentages && canBePercentage(unitType);
      return (
        <CriterionSituation
          key={criterion.id}
          criterion={criterion}
          displayValue={getWorst(pvfs[criterion.id], usePercentage)}
        />
      );
    });
  }

  function renderCriterionChoices(): JSX.Element[] {
    return _.map(
      criteria,
      (criterion: ICriterion): JSX.Element => (
        <CriterionChoice key={criterion.id} criterion={criterion} />
      )
    );
  }

  return (
    <Grid container item>
      <Grid item xs={12}>
        <Typography variant="h6">Given the following situation:</Typography>
      </Grid>
      <Grid item xs={12}>
        {renderCriterionSituations()}
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">
          Which of the following improvements is most important?
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <RadioGroup
          name="most-important-criterion-radio"
          value={mostImportantCriterionId}
          onChange={handleSelection}
        >
          {renderCriterionChoices()}
        </RadioGroup>
      </Grid>
    </Grid>
  );
}
