import ICriterion from 'src/Interface/ICriterion';
import IExactSwingRatio from 'src/Interface/IExactSwingRatio';
import {ILinearPvf} from 'src/Interface/ILinearPvf';
import IPvf from 'src/Interface/TPvf';
import {
  buildThresholdPreferences,
  calculateInputValuesByCriterion,
  calculateReferenceChangeRatio,
  calculateStatementValues,
  getInitialInputValue,
  getInitialValidity,
  getThresholdValueError
} from './ThresholdElicitationUtil';
import {TThresholdChangeDirection} from './TThresholdChangeDirection';

describe('thresholdElicitationUtil', () => {
  describe('getInitialValidity', () => {
    it('should return a record of true values keyed by criteria id', () => {
      const criteria = [
        {id: 'crit1Id'} as ICriterion,
        {id: 'crit2Id'} as ICriterion
      ];
      const result = getInitialValidity(criteria);
      const expectedResult = {
        crit1Id: true,
        crit2Id: true
      };
      expect(result).toEqual(expectedResult);
    });
  });

  describe('calculateReferenceChangeRatio', () => {
    it('should return the ratio', () => {
      const stepSize = 4;
      const range: [number, number] = [0, 10];
      const result = calculateReferenceChangeRatio(stepSize, range);
      expect(result).toEqual(0.4);
    });
  });

  describe('calculateInputValuesByCriterion', () => {
    it('should return the initial value per criterion', () => {
      const criteria: ICriterion[] = [
        {
          id: 'critId1',
          dataSources: [{unitOfMeasurement: {type: 'custom'}}]
        } as ICriterion
      ];
      const referenceChangeRatio = 0.71;
      const pvfs: Record<string, IPvf> = {
        critId1: {
          direction: 'increasing',
          range: [0, 1.1]
        }
      };
      const result = calculateInputValuesByCriterion(
        criteria,
        referenceChangeRatio,
        pvfs,
        {}
      );
      const expectedResult: Record<string, number> = {
        critId1: 0.8
      };
      expect(result).toEqual(expectedResult);
    });
  });

  describe('buildThresholdPreferences', () => {
    it('should calculate the ratio for each criterion', () => {
      const equivalentReferenceChange = 2;
      const valuesByCriterion: Record<string, number> = {
        critId2: 5,
        critId3: 1
      };
      const pvfs: Record<string, IPvf> = {
        critId1: {direction: 'increasing', range: [0, 10]},
        critId2: {direction: 'increasing', range: [0, 10]},
        critId3: {direction: 'increasing', range: [0, 10]}
      };
      const referenceId = 'critId1';
      const result = buildThresholdPreferences(
        referenceId,
        equivalentReferenceChange,
        valuesByCriterion,
        pvfs
      );
      const expectedResult: IExactSwingRatio[] = [
        {
          elicitationMethod: 'threshold',
          type: 'exact swing',
          criteria: ['critId1', 'critId2'],
          ratio: 2.5
        },
        {
          elicitationMethod: 'threshold',
          type: 'exact swing',
          criteria: ['critId1', 'critId3'],
          ratio: 0.5
        }
      ];
      expect(result).toEqual(expectedResult);
    });
  });

  describe('getInitialInputValue', () => {
    it('should return a value that is a multiple of the step size', () => {
      const referenceRatio = 0.48;
      const configuredRange: [number, number] = [0, 1];
      const magnitude = -1;
      const result = getInitialInputValue(
        referenceRatio,
        configuredRange,
        magnitude
      );
      expect(result).toEqual(0.5);
    });
  });

  describe('calculateStatementValues', () => {
    const changeValue = 0.1;
    const usePercentage = false;
    it('should return the worst value as reference and a larger value as an improvement', () => {
      const pvf: ILinearPvf = {
        type: 'linear',
        range: [0, 1],
        direction: 'increasing'
      };
      const elicitationDirection: TThresholdChangeDirection = 'improvement';
      const result = calculateStatementValues(
        changeValue,
        pvf,
        elicitationDirection,
        usePercentage
      );
      expect(result).toEqual([0, 0.1]);
    });

    it('should return the best value as reference and a smaller value as an improvement', () => {
      const pvf: ILinearPvf = {
        type: 'linear',
        range: [0, 1],
        direction: 'increasing'
      };
      const elicitationDirection: TThresholdChangeDirection = 'worsening';
      const result = calculateStatementValues(
        changeValue,
        pvf,
        elicitationDirection,
        usePercentage
      );
      expect(result).toEqual([1, 0.9]);
    });

    it('should return the worst value as reference and a smaller value as an improvement', () => {
      const pvf: ILinearPvf = {
        type: 'linear',
        range: [0, 1],
        direction: 'decreasing'
      };
      const elicitationDirection: TThresholdChangeDirection = 'improvement';
      const result = calculateStatementValues(
        changeValue,
        pvf,
        elicitationDirection,
        usePercentage
      );
      expect(result).toEqual([1, 0.9]);
    });

    it('should return the best value as reference and a larger value as an improvement', () => {
      const pvf: ILinearPvf = {
        type: 'linear',
        range: [0, 1],
        direction: 'decreasing'
      };
      const elicitationDirection: TThresholdChangeDirection = 'worsening';
      const result = calculateStatementValues(
        changeValue,
        pvf,
        elicitationDirection,
        usePercentage
      );
      expect(result).toEqual([0, 0.1]);
    });
  });

  describe('getThresholdValueError', () => {
    it('should return an empty string if there is no error', () => {
      const error = getThresholdValueError(10, 0, 100);
      expect(error).toEqual('');
    });

    it('should return an error if the value is below the min value', () => {
      const error = getThresholdValueError(-10, 0, 100);
      expect(error).toEqual('Value needs to be between 0 and 100');
    });

    it('should return an error if the value is above the max value', () => {
      const error = getThresholdValueError(101, 0, 100);
      expect(error).toEqual('Value needs to be between 0 and 100');
    });

    it('should return an error if the value is NaN', () => {
      const error = getThresholdValueError(NaN, 0, 100);
      expect(error).toEqual('Only numerical values accepted');
    });

    it('should return an error if the value is undefined', () => {
      const error = getThresholdValueError(undefined, 0, 100);
      expect(error).toEqual('Only numerical values accepted');
    });

    it('should return an error if the value is null', () => {
      const error = getThresholdValueError(null, 0, 100);
      expect(error).toEqual('Only numerical values accepted');
    });

    it('should return an error if the value is 0', () => {
      const error = getThresholdValueError(0, 0, 100);
      expect(error).toEqual('Value cannot be 0');
    });
  });
});
