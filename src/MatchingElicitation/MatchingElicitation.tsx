import {Box, Grid, Paper} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {InlineHelp} from 'help-popup';
import _ from 'lodash';
import {useContext} from 'react';
import {ElicitationContext} from 'src/ElicitationContext/ElicitationContext';
import MostImportantChoice from '../MostImportantChoice/MostImportantChoice';
import MatchingButtons from './MatchingButtons/MatchingButtons';
import MatchingSetImportance from './MatchingSetImportance/MatchingSetImportance';

export default function MatchingElicitation() {
  const {currentStep, criteria} = useContext(ElicitationContext);
  const totalSteps = _.size(criteria);

  return (
    <Grid container justify="center" component={Box} mt={2}>
      <Grid container item spacing={4} sm={12} md={9} component={Paper}>
        <Grid item xs={12}>
          <Typography id="matching-title-header" variant="h4">
            <InlineHelp helpId="matching">Matching</InlineHelp>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {currentStep === 1 ? (
            <MostImportantChoice />
          ) : (
            <MatchingSetImportance />
          )}
        </Grid>
        <Grid item xs={9}>
          <MatchingButtons />
        </Grid>
        <Grid item xs={3} container alignItems="center" justify="flex-end">
          <Grid item id="step-counter">
            <Typography>
              Step {currentStep} of {totalSteps}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
