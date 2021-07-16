import IExactSwingRatio from 'src/Interface/IExactSwingRatio';
import { TThresholdChangeDirection } from './TThresholdChangeDirection';
export default interface IThresholdElicitationContext {
    direction: TThresholdChangeDirection;
    mostImportantCriterionId: string;
    preferences: Record<string, IExactSwingRatio>;
    equivalentChangeForReferenceCriterion: number;
    inputValuesByCriterion: Record<string, number>;
    isSaveButtonDisabled: boolean;
    isInvalidReferenceValue: boolean;
    setDirection: (direction: TThresholdChangeDirection) => void;
    setIsSaveButtonDisabled: (isDisabled: boolean) => void;
    setIsValidValue: (criterionId: string, isValid: boolean) => void;
    setMostImportantCriterionId: (id: string) => void;
    setPreferences: (preferences: Record<string, IExactSwingRatio>) => void;
    setEquivalentChangeForReferenceCriterion: (equivalentChange: number) => void;
    setCriterionInputValue: (criterionId: string, value: number) => void;
    getInputValueForCriterion: (id: string) => number;
    setIsInvalidReferenceValue: (validity: boolean) => void;
}
