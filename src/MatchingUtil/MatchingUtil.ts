import _ from 'lodash';
import ICriterion from 'src/Interface/ICriterion';
import {ILinearPvf} from 'src/Interface/ILinearPvf';
import {IPieceWiseLinearPvf} from 'src/Interface/IPieceWiseLinearPvf';
import {TPvf} from 'src/Interface/TPvf';
import {TPvfDirection} from 'src/Types/PvfTypes';
import {getBest, getUnitLabel, getWorst} from 'src/Util/util';

export const DEFAULT_MATCHING_TEMPLATE =
  'How much better should %criterion1% minimally become to justify the worsening of %criterion2%?';

export function getMatchingStatement(
  mostImportantCriterion: ICriterion,
  currentCriterion: ICriterion,
  usePercentagesForMostImportantCriterion: boolean,
  usePercentagesForCurrentCriterion: boolean,
  pvfs: Record<string, TPvf>,
  template?: string
): string {
  const matchingTemplate = template ? template : DEFAULT_MATCHING_TEMPLATE;
  return matchingTemplate
    .replace(/%criterion1%/gi, mostImportantCriterion.title)
    .replace(
      /%unit1%/gi,
      getUnitLabel(
        mostImportantCriterion.dataSources[0].unitOfMeasurement,
        usePercentagesForMostImportantCriterion
      )
    )
    .replace(
      /%worst1%/gi,
      String(
        getWorst(
          pvfs[mostImportantCriterion.id],
          usePercentagesForMostImportantCriterion
        )
      )
    )
    .replace(
      /%best1%/gi,
      String(
        getBest(
          pvfs[mostImportantCriterion.id],
          usePercentagesForMostImportantCriterion
        )
      )
    )
    .replace(/%criterion2%/gi, currentCriterion.title)
    .replace(
      /%unit2%/gi,
      getUnitLabel(
        currentCriterion.dataSources[0].unitOfMeasurement,
        usePercentagesForCurrentCriterion
      )
    )
    .replace(
      /%worst2%/gi,
      String(
        getWorst(pvfs[currentCriterion.id], usePercentagesForCurrentCriterion)
      )
    )
    .replace(
      /%best2%/gi,
      String(
        getBest(pvfs[currentCriterion.id], usePercentagesForCurrentCriterion)
      )
    );
}

export function determineStepSize([lowerBound, upperBound]: [
  number,
  number
]): number {
  const interval = upperBound - lowerBound;
  const magnitude = Math.floor(Math.log10(interval));
  return Math.pow(10, magnitude - 1);
}

export function calculateImportance(sliderValue: number, pvf: TPvf): number {
  if (isPieceWiseLinearPvf(pvf)) {
    return calculatePiecewiseImportance(sliderValue, pvf);
  } else {
    return calculateLinearImportance(sliderValue, pvf);
  }
}

function isPieceWiseLinearPvf(pvf: TPvf): pvf is IPieceWiseLinearPvf {
  return 'cutoffs' in pvf;
}

function calculateLinearImportance(
  sliderValue: number,
  {range: [lowerBound, upperBound], direction}: ILinearPvf
): number {
  const rebased =
    direction === 'decreasing'
      ? upperBound - sliderValue
      : sliderValue - lowerBound;
  return (rebased / Math.abs(lowerBound - upperBound)) * 100;
}

function calculatePiecewiseImportance(
  value: number,
  pvf: IPieceWiseLinearPvf
): number {
  const {
    cutoffs,
    range: [lowerBound, upperBound],
    direction
  } = pvf;
  const cutoffsWithBounds = [lowerBound, ...cutoffs, upperBound];
  const valuesWithBounds =
    direction === 'increasing'
      ? [0, 0.25, 0.5, 0.75, 1]
      : [1, 0.75, 0.5, 0.25, 0];
  const exactCutoffIdx = _.findIndex(
    cutoffsWithBounds,
    (x: number): boolean => x === value
  );
  if (exactCutoffIdx !== -1) {
    return valuesWithBounds[exactCutoffIdx] * 100;
  } else {
    return (
      calculateIntermediateValue(
        value,
        cutoffsWithBounds,
        valuesWithBounds,
        direction
      ) * 100
    );
  }
}

function calculateIntermediateValue(
  value: number,
  cutoffsWithBounds: number[],
  valuesWithBounds: number[],
  direction: TPvfDirection
): number {
  const largerCutoffIdx = _.findIndex(
    cutoffsWithBounds,
    (x: number): boolean => x > value
  );
  const [lowerCutOff, upperCutOff] = [
    cutoffsWithBounds[largerCutoffIdx - 1],
    cutoffsWithBounds[largerCutoffIdx]
  ];

  const rebased = value - lowerCutOff;
  const ratioOfQuartile = rebased / (upperCutOff - lowerCutOff);
  const quartileValue = valuesWithBounds[largerCutoffIdx - 1];
  if (direction === 'increasing') {
    return quartileValue + 0.25 * ratioOfQuartile;
  } else {
    return quartileValue - 0.25 * ratioOfQuartile;
  }
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
