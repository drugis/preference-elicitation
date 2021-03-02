import IUnitOfMeasurement, {
  UnitOfMeasurementType
} from 'src/Interface/IUnitOfMeasurement';
import {TPvf} from 'src/Interface/TPvf';

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
  } else if (precision !== 0 && !precision) {
    precision = 3;
  } else if (x === 0) {
    return x;
  } else if (x > 1 || x < -1) {
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
