import Grid from '@material-ui/core/Grid';
import {useContext} from 'react';
import {ThresholdElicitationContext} from '../ThresholdElicitationContext';
import ThresholdElicitationDirectionChoice from '../ThresholdElicitationDirectionChoice/ThresholdElicitationDirectionChoice';
import ReferenceCriterionChoice from './ReferenceCriterionChoice/ReferenceCriterionChoice';
import ThresholdReferenceInput from './ThresholdReferenceInput/ThresholdReferenceInput';

export default function ThresholdElicitationStep1(): JSX.Element {
  const {mostImportantCriterionId, direction} = useContext(
    ThresholdElicitationContext
  );

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <ReferenceCriterionChoice />
      </Grid>

      {mostImportantCriterionId ? (
        <Grid container item xs={12}>
          <Grid item xs={12}>
            <ThresholdElicitationDirectionChoice />
          </Grid>
          <Grid item xs={12}>
            {direction ? <ThresholdReferenceInput /> : <></>}
          </Grid>
        </Grid>
      ) : (
        <></>
      )}
    </Grid>
  );
}
