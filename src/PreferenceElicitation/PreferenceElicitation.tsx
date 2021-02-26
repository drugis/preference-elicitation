import {Box, Grid} from '@material-ui/core';
import React from 'react';
import ImpreciseSwingWeighting from 'src/ImpreciseSwingElicitation/ImpreciseSwingWeighting';
import ICriterion from 'src/Interface/ICriterion';
import IExactSwingRatio from 'src/Interface/IExactSwingRatio';
import IRanking from 'src/Interface/IRanking';
import IRatioBoundConstraint from 'src/Interface/IRatioBoundConstraint';
import {TPvf} from 'src/Interface/TPvf';
import MatchingElicitation from 'src/MatchingElicitation/MatchingElicitation';
import PreciseSwingWeighting from 'src/PreciseSwingElicitation/PreciseSwingWeighting';
import RankingElicitation from 'src/RankingElicitation/RankingElicitation';
import {TElicitationMethod} from 'src/Types/TElicitationMethod';
import {ElicitationContextProviderComponent} from '../ElicitationContext/ElicitationContext';

export default function PreferenceElicitation({
  elicitationMethod,
  criteria,
  showPercentages,
  pvfs,
  cancelCallback,
  saveCallback
}: {
  elicitationMethod: TElicitationMethod;
  criteria: ICriterion[];
  showPercentages: boolean;
  pvfs: Record<string, TPvf>;
  cancelCallback: () => void;
  saveCallback: (
    preferences: IExactSwingRatio[] | IRatioBoundConstraint[] | IRanking[]
  ) => void;
}): JSX.Element {
  function renderElicitation(
    elicitationMethod: TElicitationMethod
  ): JSX.Element {
    switch (elicitationMethod) {
      case 'precise':
        return <PreciseSwingWeighting />;
      case 'imprecise':
        return <ImpreciseSwingWeighting />;
      case 'matching':
        return <MatchingElicitation />;
      case 'ranking':
        return <RankingElicitation />;
    }
  }

  return (
    <ElicitationContextProviderComponent
      criteria={criteria}
      elicitationMethod={'precise'}
      showPercentages={showPercentages}
      pvfs={pvfs}
      cancelCallback={cancelCallback}
      saveCallback={saveCallback}
    >
      <Grid container justify="center" component={Box} mt={2}>
        {renderElicitation(elicitationMethod)}
      </Grid>
    </ElicitationContextProviderComponent>
  );
}
