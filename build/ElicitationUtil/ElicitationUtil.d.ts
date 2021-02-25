import IRanking from 'src/Interface/IRanking';
import IRankingAnswer from 'src/Interface/IRankingAnswer';
import IUnitOfMeasurement, { UnitOfMeasurementType } from 'src/Interface/IUnitOfMeasurement';
import { TPvf } from 'src/Interface/TPvf';
import ICriterion from '../Interface/ICriterion';
import IExactSwingRatio from '../Interface/IExactSwingRatio';
import IRatioBoundConstraint from '../Interface/IRatioBoundConstraint';
export declare function buildInitialPrecisePreferences(criteria: ICriterion[], mostImportantCriterionId: string): Record<string, IExactSwingRatio>;
export declare function buildInitialImprecisePreferences(criteria: ICriterion[], mostImportantCriterionId: string): Record<string, IRatioBoundConstraint>;
export declare function canBePercentage(unitType: UnitOfMeasurementType): boolean;
export declare function getBest(pvf: TPvf, usePercentage: boolean): number;
export declare function getWorst(pvf: TPvf, usePercentage: boolean): number;
export default function significantDigits(x: number, precision?: number): number;
export declare function getPercentifiedValue(value: number, usePercentage: boolean): number;
export declare function getUnitLabel(unit: IUnitOfMeasurement, showPercentages: boolean): string;
export declare function getSwingStatement(criterion: ICriterion, pvf: TPvf, showPercentages: boolean): string;
export declare function getMatchingStatement(mostImportantCriterion: ICriterion, currentCriterion: ICriterion): string;
export declare function determineStepSize([lowerBound, upperBound]: [
    number,
    number
]): number;
export declare function calculateImportance(sliderValue: number, { range: [lowerBound, upperBound], direction }: TPvf): number;
export declare function getCurrentCriterion(criteria: ICriterion[], mostImportantCriterionId: string, currentStep: number): ICriterion;
export declare function findCriterionIdForRank(criteria: ICriterion[], rankings: Record<string, IRankingAnswer>, rank: number): string;
export declare function assignMissingRankings(rankings: Record<string, IRankingAnswer>, selectedCriterionId: string, rank: number, criteria: ICriterion[]): Record<string, IRankingAnswer>;
export declare function addRanking(rankings: Record<string, IRankingAnswer>, criterionId: string, rank: number): Record<string, IRankingAnswer>;
export declare function buildRankingPreferences(answers: IRankingAnswer[]): IRanking[];
