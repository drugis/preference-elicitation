import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {InlineHelp} from 'help-popup';
import React, {useContext} from 'react';
import {ElicitationContext} from 'src/ElicitationContext/ElicitationContext';
import ThresholdElicitationButtons from './ThresholdElicitationButtons/ThresholdElicitationButtons';
import ThresholdElicitationStep1 from './ThresholdElicitationStep1/ThresholdElicitationStep1';
import ThresholdElicitationStep2 from './ThresholdElicitationStep2/ThresholdElicitationStep2';

export default function ThresholdElicitation(): JSX.Element {
  const {currentStep} = useContext(ElicitationContext);

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography id="threshold-elicitation-title-header" variant="h4">
          <InlineHelp helpId="threshold-elicitation">
            Threshold technique elicitation
          </InlineHelp>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {currentStep === 1 ? (
          <ThresholdElicitationStep1 />
        ) : (
          <ThresholdElicitationStep2 />
        )}
      </Grid>
      <Grid item xs={9}>
        <ThresholdElicitationButtons />
      </Grid>
      <Grid item xs={3} container alignItems="center" justify="flex-end">
        <Grid item id="step-counter">
          <Typography>Step {currentStep} of 2</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
