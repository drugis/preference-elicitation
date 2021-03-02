import ICriterion from 'src/Interface/ICriterion';
import { TPvf } from 'src/Interface/TPvf';
export declare const DEFAULT_MATCHING_TEMPLATE = "How much better should %criterion1% minimally become to justify the worsening of %criterion2%?";
export declare function getMatchingStatement(mostImportantCriterion: ICriterion, currentCriterion: ICriterion): string;
export declare function determineStepSize([lowerBound, upperBound]: [
    number,
    number
]): number;
export declare function calculateImportance(sliderValue: number, pvf: TPvf): number;
export declare function getCurrentCriterion(criteria: ICriterion[], mostImportantCriterionId: string, currentStep: number): ICriterion;
