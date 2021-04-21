import {Box, Grid} from '@material-ui/core';
import {HelpContextProviderComponent, IHelpInfo} from 'help-popup';
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
  criteria,
  elicitationMethod,
  manualHost,
  manualLexicon,
  manualPath,
  previousCallback,
  pvfs,
  showPercentages,
  cancelCallback,
  saveCallback,
  template
}: {
  criteria: ICriterion[];
  elicitationMethod: TElicitationMethod;
  manualHost: string;
  manualLexicon: Record<string, IHelpInfo>;
  manualPath: string;
  previousCallback?: () => void;
  pvfs: Record<string, TPvf>;
  showPercentages: boolean;
  cancelCallback?: () => void;
  saveCallback: (
    preferences: IExactSwingRatio[] | IRatioBoundConstraint[] | IRanking[]
  ) => void;
  template?: string;
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
      previousCallback={previousCallback}
      criteria={criteria}
      elicitationMethod={elicitationMethod}
      showPercentages={showPercentages}
      pvfs={pvfs}
      cancelCallback={cancelCallback}
      saveCallback={saveCallback}
      template={template}
    >
      <HelpContextProviderComponent
        lexicon={manualLexicon}
        host={manualHost}
        path={manualPath}
      >
        <Grid container justify="center" component={Box} mt={2}>
          {renderElicitation(elicitationMethod)}
        </Grid>
      </HelpContextProviderComponent>
    </ElicitationContextProviderComponent>
  );
}
