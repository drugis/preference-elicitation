import _ from 'lodash';
import { createContext, useCallback, useState } from 'react';
import ICriterionInfo from 'src/ChoiceBasedMatchingElicitation/ChoiceBasedMatchingQuestionAndAnswer/ChoiceBasedMatchingQuestion/ICriterionInfo ';
import IRanking from 'src/Interface/IRanking';
import IRankingAnswer from 'src/Interface/IRankingAnswer';
import { TPvf } from 'src/Interface/TPvf';
import { addRanking } from 'src/RankingUtil/RankingUtil';
import {
  buildInitialImprecisePreferences,
  buildInitialPrecisePreferences
} from 'src/SwingUtil/SwingUtil';
import { canBePercentage, getUnitLabel } from 'src/Util/util';
import ICriterion from '../Interface/ICriterion';
import IExactSwingRatio from '../Interface/IExactSwingRatio';
import IRatioBoundConstraint from '../Interface/IRatioBoundConstraint';
import IUpperRatioConstraint from '../Interface/IUpperRatioConstraint';
import { TElicitationMethod } from '../Types/TElicitationMethod';
import IElicitationContext from './IElicitationContext';

export const ElicitationContext = createContext<IElicitationContext>(
  {} as IElicitationContext
);

export function ElicitationContextProviderComponent({
  elicitationMethod,
  criteria,
  showPercentages,
  showCbmPieChart,
  previousCallback,
  pvfs,
  cancelCallback,
  saveCallback,
  template,
  stepSizesByCriterion,
  setErrorMessage,
  children
}: {
  elicitationMethod: TElicitationMethod;
  criteria: ICriterion[];
  showPercentages: boolean;
  showCbmPieChart: boolean;
  previousCallback?: () => void;
  pvfs: Record<string, TPvf>;
  cancelCallback?: () => void;
  saveCallback: (
    preferences:
      | IExactSwingRatio[]
      | IRatioBoundConstraint[]
      | IRanking[]
      | IUpperRatioConstraint[],
    thresholdValuesByCriterion?: Record<string, number>
  ) => Promise<any>;
  template?: string;
  stepSizesByCriterion: Record<string, number>;
  setErrorMessage: (error: string) => void;
  children: any;
}): JSX.Element {
  const [currentStep, setCurrentStep] = useState(1);
  const [isNextDisabled, setIsNextDisabled] = useState(true);
  const [mostImportantCriterionId, setMostImportantCriterionId] =
    useState<string>('');
  const [preferences, setPreferences] = useState<
    Record<string, IExactSwingRatio> | Record<string, IRatioBoundConstraint>
  >({});
  const [rankings, setRankings] = useState<Record<string, IRankingAnswer>>({});

  function setRanking(criterionId: string, rank: number) {
    const updatedRankings = addRanking(rankings, criterionId, rank);
    setRankings(updatedRankings);
  }

  function setMostImportantCriterionAndPreferences(criterionId: string) {
    if (elicitationMethod === 'precise') {
      setPreferences(buildInitialPrecisePreferences(criteria, criterionId));
    } else if (elicitationMethod === 'imprecise') {
      setPreferences(buildInitialImprecisePreferences(criteria, criterionId));
    }
    setMostImportantCriterionId(criterionId);
  }

  function setPreference(criterionId: string, answer: number): void {
    let updatedPreferences = _.cloneDeep(preferences);
    const preference: IExactSwingRatio = {
      elicitationMethod: elicitationMethod,
      type: 'exact swing',
      criteria: [mostImportantCriterionId, criterionId],
      ratio: 100 / answer
    };
    updatedPreferences[criterionId] = preference;
    setPreferences(updatedPreferences);
  }

  function setBoundPreference(
    criterionId: string,
    answer: [number, number]
  ): void {
    let updatedPreferences = _.cloneDeep(preferences);
    const preference: IRatioBoundConstraint = {
      elicitationMethod: 'imprecise',
      type: 'ratio bound',
      criteria: [mostImportantCriterionId, criterionId],
      bounds: [100 / answer[1], 100 / answer[0]]
    };
    updatedPreferences[criterionId] = preference;
    setPreferences(updatedPreferences);
  }

  function getCriterion(id: string): ICriterion {
    return _.find(criteria, ['id', id]);
  }

  const getCriterionInfo = useCallback(
    (criterionId: string): ICriterionInfo => {
      const criterion: ICriterion = _.find(criteria, ['id', criterionId]);
      const unit = criterion.dataSources[0].unitOfMeasurement;
      const usePercentage = criterion
        ? showPercentages && canBePercentage(unit.type)
        : false;
      return {
        title: criterion ? criterion.title : '',
        description:
          criterion && criterion.description ? criterion.description : '',
        usePercentage: usePercentage,
        unitOfMeasurement: getUnitLabel(unit, showPercentages)
      };
    },
    [criteria, showPercentages]
  );

  return (
    <ElicitationContext.Provider
      value={{
        currentStep,
        isNextDisabled,
        mostImportantCriterionId,
        preferences,
        elicitationMethod,
        showPercentages,
        showCbmPieChart,
        pvfs,
        criteria,
        rankings,
        template,
        stepSizesByCriterion,
        getCriterion,
        previousCallback,
        setCurrentStep,
        setIsNextDisabled,
        setMostImportantCriterionId: setMostImportantCriterionAndPreferences,
        setPreference,
        setBoundPreference,
        setPreferences,
        cancelCallback,
        saveCallback,
        setRanking,
        getCriterionInfo,
        setErrorMessage
      }}
    >
      {children}
    </ElicitationContext.Provider>
  );
}
