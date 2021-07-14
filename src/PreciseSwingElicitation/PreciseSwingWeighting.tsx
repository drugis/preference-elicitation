import {Box} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {InlineHelp} from 'help-popup';
import React, {useContext} from 'react';
import {ElicitationContext} from 'src/ElicitationContext/ElicitationContext';
import MostImportantChoice from '../MostImportantChoice/MostImportantChoice';
import SwingButtons from '../SwingButtons/SwingButtons';
import SwingSetWeights from '../SwingSetWeights/SwingSetWeights';

export default function PreciseSwingWeighting() {
  const {currentStep} = useContext(ElicitationContext);

  return (
    <Grid container justify="center" component={Box} mt={2}>
      <Grid container item component={Paper} sm={12} md={9}>
        <Grid item xs={12}>
          <Typography id="swing-weighting-title-header" variant="h4">
            <InlineHelp helpId="swing-weighting">
              Precise swing weighting
            </InlineHelp>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {currentStep === 1 ? <MostImportantChoice /> : <SwingSetWeights />}
        </Grid>
        <Grid item xs={9}>
          <SwingButtons />
        </Grid>
        <Grid item xs={3} container alignItems="center" justify="flex-end">
          <Grid item id="step-counter">
            <Typography>Step {currentStep} of 2</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
