import {Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React from 'react';

export default function FinalChoiceBasedMatchingScreen() {
  return (
    <Grid item xs={12} id="final-screen">
      <Typography>
        You have provided sufficient information, thank you. You can go back and
        adjust your answers, or save the elicitation.
      </Typography>
    </Grid>
  );
}
