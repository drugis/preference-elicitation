import IUnitOfMeasurement, { UnitOfMeasurementType } from 'src/Interface/IUnitOfMeasurement';
import { TPvf } from 'src/Interface/TPvf';
export declare function canBePercentage(unitType: UnitOfMeasurementType): boolean;
export declare function getBest(pvf: TPvf, usePercentage: boolean): number;
export declare function getWorst(pvf: TPvf, usePercentage: boolean): number;
export default function significantDigits(x: number, precision?: number): number;
export declare function getPercentifiedValue(value: number, usePercentage: boolean): number;
export declare function getUnitLabel(unit: IUnitOfMeasurement, showPercentages: boolean): string;
