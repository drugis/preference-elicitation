import ICriterion from 'src/Interface/ICriterion';
import IRanking from 'src/Interface/IRanking';
import IRankingAnswer from 'src/Interface/IRankingAnswer';
import {TPvf} from 'src/Interface/TPvf';
import IExactSwingRatio from '../Interface/IExactSwingRatio';
import IRatioBoundConstraint from '../Interface/IRatioBoundConstraint';
import {TElicitationMethod} from '../Types/TElicitationMethod';

export default interface IElicitationContext {
  currentStep: number;
  isNextDisabled: boolean;
  mostImportantCriterionId: string;
  preferences:
    | Record<string, IExactSwingRatio>
    | Record<string, IRatioBoundConstraint>;
  elicitationMethod: TElicitationMethod;
  showPercentages: boolean;
  pvfs: Record<string, TPvf>;
  criteria: ICriterion[];
  rankings: Record<string, IRankingAnswer>;
  getCriterion: (criterionId: string) => ICriterion;
  setCurrentStep: (newStep: number) => void;
  setIsNextDisabled: (isNextDisabled: boolean) => void;
  setMostImportantCriterionId: (criterionId: string) => void;
  setPreference: (criterionId: string, preference: number) => void;
  setBoundPreference: (
    criterionId: string,
    preference: [number, number]
  ) => void;
  setPreferences: (
    preferences:
      | Record<string, IExactSwingRatio>
      | Record<string, IRatioBoundConstraint>
  ) => void;
  cancelCallback: () => void;
  saveCallback: (
    preferences: IExactSwingRatio[] | IRatioBoundConstraint[] | IRanking[]
  ) => void;
  setRanking: (criterionId: string, rank: number) => void;
}
