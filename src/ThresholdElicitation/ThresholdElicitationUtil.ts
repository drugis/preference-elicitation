import _ from 'lodash';
import ICriterion from 'src/Interface/ICriterion';
import IExactSwingRatio from 'src/Interface/IExactSwingRatio';
import IUnitOfMeasurement from 'src/Interface/IUnitOfMeasurement';
import IPvf, {TPvf} from 'src/Interface/TPvf';
import significantDigits, {getBest, getWorst} from 'src/Util/util';
import {TThresholdChangeDirection} from './TThresholdChangeDirection';

export function getInitialValidity(
  filteredCriteria: ICriterion[]
): Record<string, boolean> {
  return _(filteredCriteria)
    .keyBy('id')
    .mapValues(() => true)
    .value();
}

export function buildThresholdPreferences(
  referenceId: string,
  equivalentReferenceChange: number,
  valuesByCriterion: Record<string, number>,
  pvfs: Record<string, IPvf>
): IExactSwingRatio[] {
  const referenceRatio = calculateReferenceChangeRatio(
    equivalentReferenceChange,
    pvfs[referenceId].range
  );
  return _.map(
    valuesByCriterion,
    (criterionValue: number, criterionId: string): IExactSwingRatio => {
      const [lower, upper] = pvfs[criterionId].range;
      const ratio = criterionValue / (upper - lower) / referenceRatio;
      return {
        elicitationMethod: 'threshold',
        type: 'exact swing',
        criteria: [referenceId, criterionId],
        ratio: ratio
      };
    }
  );
}

export function calculateReferenceChangeRatio(
  equivalentReferenceChange: number,
  [lowerRangeValue, upperRangeValue]: [number, number]
): number {
  return equivalentReferenceChange / (upperRangeValue - lowerRangeValue);
}

export function calculateInputValuesByCriterion(
  criteria: ICriterion[],
  referenceChangeRatio: number,
  pvfs: Record<string, IPvf>,
  predefinedStepSizes: Record<string, number>
): Record<string, number> {
  return _(criteria)
    .keyBy('id')
    .mapValues((criterion: ICriterion): number => {
      const configuredRange = pvfs[criterion.id].range;
      const predefinedStepSize = predefinedStepSizes[criterion.id];
      const magnitude = getMagnitude(configuredRange, predefinedStepSize);
      return getInitialInputValue(
        referenceChangeRatio,
        configuredRange,
        magnitude
      );
    })
    .value();
}

function getMagnitude(
  [lowerConfiguredValue, upperConfiguredValue]: [number, number],
  predefinedStepSize: number | undefined
): number {
  if (predefinedStepSize) {
    return Math.log10(predefinedStepSize);
  } else {
    const interval = upperConfiguredValue - lowerConfiguredValue;
    const magnitude = Math.floor(Math.log10(interval)) - 1;
    return magnitude;
  }
}

export function getInitialInputValue(
  referenceRatio: number,
  [lowerConfiguredValue, upperConfiguredValue]: [number, number],
  magnitude: number
): number {
  const indifferenceValue =
    referenceRatio * (upperConfiguredValue - lowerConfiguredValue);
  const valueMappedOntoStepSize = indifferenceValue.toFixed(
    Math.abs(magnitude)
  );
  return parseFloat(valueMappedOntoStepSize);
}

export function calculateStatementValues(
  changeValue: number,
  pvf: TPvf,
  elicitationDirection: TThresholdChangeDirection,
  usePercentage: boolean
) {
  const worstValue = getWorst(pvf, usePercentage);
  const bestValue = getBest(pvf, usePercentage);
  const referenceValue =
    elicitationDirection === 'improvement' ? worstValue : bestValue;

  if (
    pvf.direction === 'increasing' &&
    elicitationDirection === 'improvement'
  ) {
    return [referenceValue, significantDigits(referenceValue + changeValue)];
  } else if (
    pvf.direction === 'increasing' &&
    elicitationDirection === 'worsening'
  ) {
    return [referenceValue, significantDigits(referenceValue - changeValue)];
  } else if (
    pvf.direction === 'decreasing' &&
    elicitationDirection === 'improvement'
  ) {
    return [referenceValue, significantDigits(referenceValue - changeValue)];
  } else if (
    pvf.direction === 'decreasing' &&
    elicitationDirection === 'worsening'
  ) {
    return [referenceValue, significantDigits(referenceValue + changeValue)];
  } else {
    throw 'Invalid arguments';
  }
}

export function getUpperBound(
  usePercentage: boolean,
  unit: IUnitOfMeasurement
): number {
  if (usePercentage && unit.type === 'decimal') {
    return 100;
  } else if (!usePercentage && unit.type === 'percentage') {
    return 1;
  } else {
    return unit.upperBound;
  }
}

export function getThresholdValueError(
  value: number,
  minValue: number,
  maxValue: number
): string {
  if (isNaN(value) || value === null) {
    return 'Only numerical values accepted';
  } else if (value < minValue || value > maxValue) {
    return `Value needs to be between ${minValue} and ${maxValue}`;
  } else if (value === 0) {
    return 'Value cannot be 0';
  } else {
    return '';
  }
}
