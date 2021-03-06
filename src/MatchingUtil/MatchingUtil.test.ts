import ICriterion from 'src/Interface/ICriterion';
import {ILinearPvf} from 'src/Interface/ILinearPvf';
import {IPieceWiseLinearPvf} from 'src/Interface/IPieceWiseLinearPvf';
import {
  calculateImportance,
  determineStepSize,
  getCurrentCriterion,
  getMatchingStatement
} from './MatchingUtil';

describe('MatchingUtil', () => {
  const criteria: ICriterion[] = [
    {
      id: 'critId1',
      title: 'title1',
      dataSources: [{unitOfMeasurement: {type: 'custom'}}]
    } as ICriterion,
    {
      id: 'critId2',
      title: 'title2',
      dataSources: [{unitOfMeasurement: {type: 'custom'}}]
    } as ICriterion,
    {
      id: 'critId3',
      title: 'title3',
      dataSources: [{unitOfMeasurement: {type: 'custom'}}]
    } as ICriterion
  ];

  describe('determineStepSize', () => {
    it('should return the step size based on the criterion scale', () => {
      const result = determineStepSize([0, 1]);
      expect(result).toEqual(0.1);
    });
  });

  describe('calculateImportance', () => {
    it('should calculate the importance correctly for increasing pvf', () => {
      const result = calculateImportance(0.3, {
        range: [0, 1],
        direction: 'increasing',
        type: 'linear'
      });
      expect(result).toEqual(30);
    });

    it('should calculate the importance correctly for decreasing pvf', () => {
      const result = calculateImportance(0.3, {
        range: [0, 1],
        direction: 'decreasing',
        type: 'linear'
      });
      expect(result).toEqual(70);
    });

    it('should calculate increasing piecewise linear utility correctly', () => {
      const pvf: IPieceWiseLinearPvf = {
        direction: 'increasing',
        type: 'piecewise-linear',
        values: [0.25, 0.5, 0.75],
        cutoffs: [30, 40, 45],
        range: [20, 50]
      };
      expect(calculateImportance(20, pvf)).toEqual(0);
      expect(calculateImportance(30, pvf)).toEqual(25);
      expect(calculateImportance(35, pvf)).toEqual(37.5);
      expect(calculateImportance(40, pvf)).toEqual(50);
      expect(calculateImportance(45, pvf)).toEqual(75);
      expect(calculateImportance(50, pvf)).toEqual(100);
    });

    it('should calculate decreasing piecewise linear utility correctly', () => {
      const pvf: IPieceWiseLinearPvf = {
        direction: 'decreasing',
        type: 'piecewise-linear',
        values: [0.75, 0.5, 0.25],
        cutoffs: [30, 40, 45],
        range: [20, 50]
      };
      expect(calculateImportance(20, pvf)).toEqual(100);
      expect(calculateImportance(30, pvf)).toEqual(75);
      expect(calculateImportance(35, pvf)).toEqual(62.5);
      expect(calculateImportance(40, pvf)).toEqual(50);
      expect(calculateImportance(45, pvf)).toEqual(25);
      expect(calculateImportance(50, pvf)).toEqual(0);
    });
  });

  describe('getMatchingStatement', () => {
    const mostImportantCriterion = criteria[0];
    const currentCriterion = criteria[1];
    const usePercentagesForMostImportantCriterion = true;
    const usePercentagesForCurrentCriterion = true;
    const pvfs: Record<string, ILinearPvf> = {
      critId1: {
        direction: 'increasing',
        range: [0, 1],
        type: 'linear'
      },
      critId2: {
        direction: 'increasing',
        range: [0, 1],
        type: 'linear'
      }
    };

    it('should return a complete default matching statement', () => {
      const result: string = getMatchingStatement(
        mostImportantCriterion,
        currentCriterion,
        usePercentagesForMostImportantCriterion,
        usePercentagesForCurrentCriterion,
        pvfs,
        undefined
      );

      const expectedResult =
        'How much better should title1 minimally become to justify the worsening of title2?';
      expect(result).toEqual(expectedResult);
    });

    it('should return a complete matching statement using a template', () => {
      const template = 'Template %criterion1% %criterion2%?';
      const result: string = getMatchingStatement(
        mostImportantCriterion,
        currentCriterion,
        usePercentagesForMostImportantCriterion,
        usePercentagesForCurrentCriterion,
        pvfs,
        template
      );

      const expectedResult = 'Template title1 title2?';
      expect(result).toEqual(expectedResult);
    });
  });

  describe('getCurrentCriterion', () => {
    it('should return the correct criterion for matching', () => {
      const result: ICriterion = getCurrentCriterion(criteria, 'critId1', 2);
      expect(result.id).toEqual('critId2');
    });
  });
});
