import {Box, Grid, Typography} from '@material-ui/core';
import {InlineHelp} from 'help-popup';
import {useContext} from 'react';
import {ElicitationContext} from 'src/ElicitationContext/ElicitationContext';
import ChoiceBasedMatchingButtons from './ChoiceBasedMatchingButtons/ChoiceBasedMatchingButtons';
import {ChoiceBasedMatchingContext} from './ChoiceBasedMatchingContext';
import ChoiceBasedMatchingQuestionAndAnswer from './ChoiceBasedMatchingQuestionAndAnswer/ChoiceBasedMatchingQuestionAndAnswer';
import FinalChoiceBasedMatchingScreen from './FinalChoiceBasedMatchingScreen/FinalChoiceBasedMatchingScreen';

export default function ChoiceBasedMatchingElicitation() {
  const {cbmState, totalSteps} = useContext(ChoiceBasedMatchingContext);
  const {currentStep} = useContext(ElicitationContext);

  return (
    <Grid
      container
      justify="center"
      item
      spacing={4}
      sm={12}
      md={6}
      component={Box}
    >
      <Grid item xs={12}>
        <Typography id="choice-based-matching-title-header" variant="h4">
          <InlineHelp helpId="choice-based-matching">
            Choice-based Matching
          </InlineHelp>
        </Typography>
      </Grid>
      {cbmState.preferences ? (
        <FinalChoiceBasedMatchingScreen />
      ) : (
        <ChoiceBasedMatchingQuestionAndAnswer />
      )}
      <Grid item xs={9}>
        <ChoiceBasedMatchingButtons />
      </Grid>
      <Grid item xs={3} container alignItems="center" justify="flex-end">
        <Grid id="step-counter" item>
          <Typography>
            Step {currentStep} of {totalSteps + 1}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
