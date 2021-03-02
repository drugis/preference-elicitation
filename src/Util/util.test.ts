import {ILinearPvf} from 'src/Interface/ILinearPvf';
import IUnitOfMeasurement, {
  UnitOfMeasurementType
} from 'src/Interface/IUnitOfMeasurement';
import significantDigits, {
  canBePercentage,
  getBest,
  getPercentifiedValue,
  getUnitLabel,
  getWorst
} from './util';

describe('utility', () => {
  describe('canBePercentage', () => {
    it('should return true if unit type is percentage', () => {
      const unitType: UnitOfMeasurementType = 'percentage';
      const result = canBePercentage(unitType);
      expect(result).toBeTruthy();
    });

    it('should return true if unit type is decimal', () => {
      const unitType: UnitOfMeasurementType = 'decimal';
      const result = canBePercentage(unitType);
      expect(result).toBeTruthy();
    });

    it('should return false if unit type is custom', () => {
      const unitType: UnitOfMeasurementType = 'custom';
      const result = canBePercentage(unitType);
      expect(result).toBeFalsy();
    });
  });

  describe('getBest', () => {
    it('should return the largest value from pvf range if pvf is increasing', () => {
      const usePercentage = false;
      const pvf: ILinearPvf = {
        range: [10, 100],
        direction: 'increasing',
        type: 'linear'
      };
      const result = getBest(pvf, usePercentage);
      expect(result).toEqual(100);
    });

    it('should return the smallest value from pvf range if pvf is decreasing', () => {
      const usePercentage = false;
      const pvf: ILinearPvf = {
        range: [10, 100],
        direction: 'decreasing',
        type: 'linear'
      };
      const result = getBest(pvf, usePercentage);
      expect(result).toEqual(10);
    });

    it('should return percentified values if usePercentage is true', () => {
      const usePercentage = true;
      const pvf: ILinearPvf = {
        range: [0.1, 1],
        direction: 'decreasing',
        type: 'linear'
      };
      const result = getBest(pvf, usePercentage);
      expect(result).toEqual(10);
    });
  });

  describe('getWorst', () => {
    it('should return the smallest value from pvf range if pvf is increasing', () => {
      const usePercentage = false;
      const pvf: ILinearPvf = {
        range: [10, 100],
        direction: 'increasing',
        type: 'linear'
      };
      const result = getWorst(pvf, usePercentage);
      expect(result).toEqual(10);
    });

    it('should return the largest value from pvf range if pvf is decreasing', () => {
      const usePercentage = false;
      const pvf: ILinearPvf = {
        range: [10, 100],
        direction: 'decreasing',
        type: 'linear'
      };
      const result = getWorst(pvf, usePercentage);
      expect(result).toEqual(100);
    });

    it('should return percentified values if usePercentage is true', () => {
      const usePercentage = true;
      const pvf: ILinearPvf = {
        range: [0.1, 1],
        direction: 'decreasing',
        type: 'linear'
      };
      const result = getWorst(pvf, usePercentage);
      expect(result).toEqual(100);
    });
  });

  describe('significantDigits', () => {
    it('should round the input to have 3 significant digits', () => {
      expect(significantDigits(0)).toBe(0);
      expect(significantDigits(100)).toBe(100);
      expect(significantDigits(0.00001)).toBe(0.00001);
      expect(significantDigits(0.100001)).toBe(0.1);
      expect(significantDigits(51.870000000000005)).toBe(51.87);
      expect(significantDigits(1234.1)).toBe(1234.1);
      expect(significantDigits(12345)).toBe(12345);
      expect(significantDigits(-12345)).toBe(-12345);
      expect(significantDigits(-1.2345)).toBe(-1.234);
    });

    it('should work for other precisions', () => {
      expect(significantDigits(10.2345, 1)).toBe(10.2);
      expect(significantDigits(10.2345, 2)).toBe(10.23);
      expect(significantDigits(10.2345, 5)).toBe(10.2345);
      expect(significantDigits(10.2345123, 5)).toBe(10.23451);
      expect(significantDigits(10.23, 5)).toBe(10.23);
    });

    it('should throw for spurious values', () => {
      expect(() => {
        significantDigits(undefined);
      }).toThrow('attempt to apply significant digits to non-numeric value');
      expect(() => {
        significantDigits(null);
      }).toThrow('attempt to apply significant digits to non-numeric value');
      expect(() => {
        significantDigits(NaN);
      }).toThrow('attempt to apply significant digits to non-numeric value');
    });
  });

  describe('getPercentifiedValue', () => {
    it('should return a percentified value if it should show percentages', () => {
      const value = 0.010001;
      const result = getPercentifiedValue(value, true);
      expect(result).toEqual(1);
    });

    it('should return  the original value if it should not show percentages', () => {
      const value = 1;
      const result = getPercentifiedValue(value, false);
      expect(result).toEqual(1);
    });
  });

  describe('getUnitLabel', () => {
    it('should return % if showing percentages and unit type is decimal', () => {
      const unit = {type: 'decimal'} as IUnitOfMeasurement;
      const showPercentages = true;
      const result = getUnitLabel(unit, showPercentages);
      expect(result).toEqual('%');
    });

    it('should return % if showing percentages and unit type is percentage', () => {
      const unit = {
        type: 'percentage',
        label: '%'
      } as IUnitOfMeasurement;
      const showPercentages = true;
      const result = getUnitLabel(unit, showPercentages);
      expect(result).toEqual('%');
    });

    it('should return unit label if unit type is custom', () => {
      const unit = {
        type: 'custom',
        label: 'custom'
      } as IUnitOfMeasurement;
      const showPercentages = true;
      const result = getUnitLabel(unit, showPercentages);
      expect(result).toEqual('custom');
    });

    it('should return an empty string if unit type is percentage but percetages are not shown', () => {
      const unit = {
        type: 'percentage'
      } as IUnitOfMeasurement;
      const showPercentages = false;
      const result = getUnitLabel(unit, showPercentages);
      expect(result).toEqual('');
    });

    it('should return an empty string if unit type is decimal but percetages are shown', () => {
      const unit = {
        type: 'percentage',
        label: ''
      } as IUnitOfMeasurement;
      const showPercentages = false;
      const result = getUnitLabel(unit, showPercentages);
      expect(result).toEqual('');
    });
  });
});
