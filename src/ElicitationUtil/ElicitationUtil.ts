import _ from 'lodash';
import {
  DEFAULT_MATCHING_TEMPLATE,
  DEFAULT_PRECISE_TEMPLATE,
  UNRANKED
} from 'src/constants';
import IRanking from 'src/Interface/IRanking';
import IRankingAnswer from 'src/Interface/IRankingAnswer';
import IUnitOfMeasurement, {
  UnitOfMeasurementType
} from 'src/Interface/IUnitOfMeasurement';
import {TPvf} from 'src/Interface/TPvf';
import ICriterion from '../Interface/ICriterion';
import IExactSwingRatio from '../Interface/IExactSwingRatio';
import IRatioBoundConstraint from '../Interface/IRatioBoundConstraint';

export function buildInitialPrecisePreferences(
  criteria: ICriterion[],
  mostImportantCriterionId: string
): Record<string, IExactSwingRatio> {
  return _(criteria)
    .filter(
      (criterion: ICriterion): boolean =>
        criterion.id !== mostImportantCriterionId
    )
    .map((criterion: ICriterion): [string, IExactSwingRatio] => {
      const preference: IExactSwingRatio = {
        criteria: [mostImportantCriterionId, criterion.id],
        elicitationMethod: 'precise',
        type: 'exact swing',
        ratio: 1
      };
      return [criterion.id, preference];
    })
    .fromPairs()
    .value();
}

export function buildInitialImprecisePreferences(
  criteria: ICriterion[],
  mostImportantCriterionId: string
): Record<string, IRatioBoundConstraint> {
  return _(criteria)
    .reject(['id', mostImportantCriterionId])
    .map((criterion: ICriterion): [string, IRatioBoundConstraint] => {
      const preference: IRatioBoundConstraint = {
        criteria: [mostImportantCriterionId, criterion.id],
        elicitationMethod: 'imprecise',
        type: 'ratio bound',
        bounds: [1, 100]
      };
      return [criterion.id, preference];
    })
    .fromPairs()
    .value();
}

export function canBePercentage(unitType: UnitOfMeasurementType): boolean {
  return unitType === 'percentage' || unitType === 'decimal';
}

export function getBest(pvf: TPvf, usePercentage: boolean): number {
  const value = significantDigits(
    isIncreasing(pvf) ? pvf.range[1] : pvf.range[0]
  );
  return getPercentifiedValue(value, usePercentage);
}

export function getWorst(pvf: TPvf, usePercentage: boolean): number {
  const value = significantDigits(
    isIncreasing(pvf) ? pvf.range[0] : pvf.range[1]
  );
  return getPercentifiedValue(value, usePercentage);
}

function isIncreasing(pvf: TPvf): boolean {
  return pvf.direction === 'increasing';
}

export default function significantDigits(x: number, precision?: number) {
  if (x === undefined || x === null || isNaN(x)) {
    throw 'attempt to apply significant digits to non-numeric value';
  }
  if (precision !== 0 && !precision) {
    precision = 3;
  }
  if (x === 0) {
    return x;
  }
  if (x > 1 || x < -1) {
    return Number.parseFloat(x.toFixed(precision));
  } else {
    return Number.parseFloat(x.toPrecision(precision));
  }
}

export function getPercentifiedValue(
  value: number,
  usePercentage: boolean
): number {
  if (usePercentage) {
    return significantDigits(significantDigits(value) * 100); //2 sigdits to ensure the precision stays the same
  } else {
    return significantDigits(value);
  }
}

export function getUnitLabel(
  unit: IUnitOfMeasurement,
  showPercentages: boolean
): string {
  if (showPercentages && unit.type === 'decimal') {
    return '%';
  } else if (!showPercentages && unit.type === 'percentage') {
    return '';
  } else {
    return unit.label;
  }
}

export function getSwingStatement(
  criterion: ICriterion,
  pvf: TPvf,
  showPercentages: boolean
): string {
  const unit = criterion.dataSources[0].unitOfMeasurement;
  const label = getUnitLabel(unit, showPercentages);
  const usePercentage = showPercentages && canBePercentage(unit.type);
  return DEFAULT_PRECISE_TEMPLATE.replace(/%criterion1%/gi, criterion.title)
    .replace(/%unit1%/gi, label)
    .replace(/%worst1%/gi, String(getWorst(pvf, usePercentage)))
    .replace(/%best1%/gi, String(getBest(pvf, usePercentage)));
}

export function getMatchingStatement(
  mostImportantCriterion: ICriterion,
  currentCriterion: ICriterion
): string {
  return DEFAULT_MATCHING_TEMPLATE.replace(
    /%criterion1%/gi,
    mostImportantCriterion.title
  ).replace(/%criterion2%/gi, currentCriterion.title);
}

export function determineStepSize([lowerBound, upperBound]: [
  number,
  number
]): number {
  const interval = upperBound - lowerBound;
  const magnitude = Math.floor(Math.log10(interval));
  return Math.pow(10, magnitude - 1);
}

export function calculateImportance(
  sliderValue: number,
  {range: [lowerBound, upperBound], direction}: TPvf
): number {
  const rebased =
    direction === 'decreasing'
      ? upperBound - sliderValue
      : sliderValue - lowerBound;
  const importance = (rebased / Math.abs(lowerBound - upperBound)) * 100;
  return importance;
}

export function getCurrentCriterion(
  criteria: ICriterion[],
  mostImportantCriterionId: string,
  currentStep: number
): ICriterion {
  return _.reject(criteria, (criterion: ICriterion) => {
    return criterion.id === mostImportantCriterionId;
  })[currentStep - 2];
}

export function findCriterionIdForRank(
  criteria: ICriterion[],
  rankings: Record<string, IRankingAnswer>,
  rank: number
): string {
  return _.find(
    criteria,
    (criterion: ICriterion): boolean =>
      rankings[criterion.id] && rankings[criterion.id].rank === rank
  ).id;
}

export function assignMissingRankings(
  rankings: Record<string, IRankingAnswer>,
  selectedCriterionId: string,
  rank: number,
  criteria: ICriterion[]
): Record<string, IRankingAnswer> {
  const intermediateRankings = addRanking(rankings, selectedCriterionId, rank);
  const lastCriterionId = findCriterionIdWithoutRanking(
    criteria,
    intermediateRankings
  );
  return addRanking(intermediateRankings, lastCriterionId, rank + 1);
}

export function addRanking(
  rankings: Record<string, IRankingAnswer>,
  criterionId: string,
  rank: number
): Record<string, IRankingAnswer> {
  let updatedRankings = _.cloneDeep(rankings);
  const newRanking: IRankingAnswer = {
    criterionId: criterionId,
    rank: rank
  };
  updatedRankings[criterionId] = newRanking;
  return updatedRankings;
}

function findCriterionIdWithoutRanking(
  criteria: ICriterion[],
  rankings: Record<string, IRankingAnswer>
): string {
  return _.find(
    criteria,
    (criterion: ICriterion): boolean =>
      rankings[criterion.id] === undefined ||
      rankings[criterion.id].rank === UNRANKED
  ).id;
}

export function buildRankingPreferences(answers: IRankingAnswer[]): IRanking[] {
  const sortedAnswers: IRankingAnswer[] = _.sortBy(answers, 'rank');
  return _.reduce(
    sortedAnswers,
    (accum: IRanking[], answer: IRankingAnswer, idx: number) => {
      if (idx === answers.length - 1) {
        return accum;
      }
      const ranking: IRanking = {
        elicitationMethod: 'ranking',
        type: 'ordinal',
        criteria: [answer.criterionId, sortedAnswers[idx + 1].criterionId]
      };
      accum.push(ranking);
      return accum;
    },
    []
  );
}
