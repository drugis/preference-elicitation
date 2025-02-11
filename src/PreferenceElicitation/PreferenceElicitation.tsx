import {HelpContextProviderComponent, IHelpInfo} from 'help-popup';
import ImpreciseSwingWeighting from 'src/ImpreciseSwingElicitation/ImpreciseSwingWeighting';
import ICriterion from 'src/Interface/ICriterion';
import IExactSwingRatio from 'src/Interface/IExactSwingRatio';
import IRanking from 'src/Interface/IRanking';
import IRatioBoundConstraint from 'src/Interface/IRatioBoundConstraint';
import {TPvf} from 'src/Interface/TPvf';
import MatchingElicitation from 'src/MatchingElicitation/MatchingElicitation';
import PreciseSwingWeighting from 'src/PreciseSwingElicitation/PreciseSwingWeighting';
import RankingElicitation from 'src/RankingElicitation/RankingElicitation';
import ThresholdElicitation from 'src/ThresholdElicitation/ThresholdElicitation';
import {ThresholdElicitationContextProviderComponent} from 'src/ThresholdElicitation/ThresholdElicitationContext';
import {TElicitationMethod} from 'src/Types/TElicitationMethod';
import {ElicitationContextProviderComponent} from '../ElicitationContext/ElicitationContext';
import {ChoiceBasedMatchingContextProviderComponent} from '../ChoiceBasedMatchingElicitation/ChoiceBasedMatchingContext';
import ChoiceBasedMatchingElicitation from '../ChoiceBasedMatchingElicitation/ChoiceBasedMatchingElicitation';

export default function PreferenceElicitation({
  criteria,
  elicitationMethod,
  manualHost,
  manualLexicon,
  manualPath,
  previousCallback,
  pvfs,
  showPercentages,
  showCbmPieChart,
  stepSizesByCriterion,
  cancelCallback,
  saveCallback,
  setErrorMessage,
  template
}: {
  criteria: ICriterion[];
  elicitationMethod: TElicitationMethod;
  manualHost?: string;
  manualLexicon: Record<string, IHelpInfo>;
  manualPath: string;
  previousCallback?: () => void;
  pvfs: Record<string, TPvf>;
  showPercentages: boolean;
  showCbmPieChart: boolean;
  stepSizesByCriterion: Record<string, number>;
  cancelCallback?: () => void;
  saveCallback: (
    preferences: IExactSwingRatio[] | IRatioBoundConstraint[] | IRanking[],
    thresholdValuesByCriterion?: Record<string, number>
  ) => Promise<any>;
  setErrorMessage: (error: string) => void;
  template?: string;
}): JSX.Element {
  return (
    <ElicitationContextProviderComponent
      previousCallback={previousCallback}
      criteria={criteria}
      elicitationMethod={elicitationMethod}
      showPercentages={showPercentages}
      showCbmPieChart={showCbmPieChart}
      pvfs={pvfs}
      cancelCallback={cancelCallback}
      saveCallback={saveCallback}
      template={template}
      stepSizesByCriterion={stepSizesByCriterion}
      setErrorMessage={setErrorMessage}
    >
      <HelpContextProviderComponent
        lexicon={manualLexicon}
        host={manualHost}
        path={manualPath}
      >
        <Elicitation elicitationMethod={elicitationMethod} />
      </HelpContextProviderComponent>
    </ElicitationContextProviderComponent>
  );
}

function Elicitation({
  elicitationMethod
}: {
  elicitationMethod: TElicitationMethod;
}): JSX.Element {
  switch (elicitationMethod) {
    case 'choice':
      return (
        <ChoiceBasedMatchingContextProviderComponent>
          <ChoiceBasedMatchingElicitation />
        </ChoiceBasedMatchingContextProviderComponent>
      );
    case 'precise':
      return <PreciseSwingWeighting />;
    case 'imprecise':
      return <ImpreciseSwingWeighting />;
    case 'matching':
      return <MatchingElicitation />;
    case 'ranking':
      return <RankingElicitation />;
    case 'threshold':
      return (
        <ThresholdElicitationContextProviderComponent>
          <ThresholdElicitation />
        </ThresholdElicitationContextProviderComponent>
      );
  }
}
