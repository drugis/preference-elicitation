import ICriterion from 'src/Interface/ICriterion';
import IExactSwingRatio from 'src/Interface/IExactSwingRatio';
import {ILinearPvf} from 'src/Interface/ILinearPvf';
import IRatioBoundConstraint from 'src/Interface/IRatioBoundConstraint';
import {
  buildInitialImprecisePreferences,
  buildInitialPrecisePreferences,
  getSwingStatement
} from './SwingUtil';

describe('SwingUtil', () => {
  const criteria: ICriterion[] = [
    {
      id: 'critId1',
      title: 'title1',
      dataSources: [{unitOfMeasurement: {type: 'custom', label: 'kg'}}]
    } as ICriterion,
    {
      id: 'critId2',
      title: 'title2',
      dataSources: [{unitOfMeasurement: {type: 'percentage', label: '%'}}]
    } as ICriterion,
    {
      id: 'critId3',
      title: 'title3',
      dataSources: [{unitOfMeasurement: {type: 'percentage', label: '%'}}]
    } as ICriterion
  ];

  describe('buildInitialPrecisePreferences', () => {
    it('should set criteria ratios to 1 except for the most important criterion', () => {
      const result: Record<
        string,
        IExactSwingRatio
      > = buildInitialPrecisePreferences(criteria, 'critId1');
      const expectedResult: Record<string, IExactSwingRatio> = {
        critId2: {
          criteria: ['critId1', 'critId2'],
          elicitationMethod: 'precise',
          type: 'exact swing',
          ratio: 1
        },
        critId3: {
          criteria: ['critId1', 'critId3'],
          elicitationMethod: 'precise',
          type: 'exact swing',
          ratio: 1
        }
      };
      expect(result).toEqual(expectedResult);
    });
  });

  describe('buildInitialImprecisePreferences', () => {
    it('should set criteria ratios to 1 except for the most important criterion', () => {
      const result: Record<
        string,
        IRatioBoundConstraint
      > = buildInitialImprecisePreferences(criteria, 'critId1');
      const expectedResult: Record<string, IRatioBoundConstraint> = {
        critId2: {
          criteria: ['critId1', 'critId2'],
          elicitationMethod: 'imprecise',
          type: 'ratio bound',
          bounds: [1, 100]
        },
        critId3: {
          criteria: ['critId1', 'critId3'],
          elicitationMethod: 'imprecise',
          type: 'ratio bound',
          bounds: [1, 100]
        }
      };
      expect(result).toEqual(expectedResult);
    });
  });

  describe('getSwingStatement', () => {
    it('should return a complete default swing statement', () => {
      const showPercentages = false;
      const pvf: ILinearPvf = {
        direction: 'increasing',
        range: [0, 1],
        type: 'linear'
      };
      const result: string = getSwingStatement(
        criteria[0],
        pvf,
        showPercentages
      );
      const expectedResult =
        "You've indicated that improving title1 from 0 kg to 1 kg is the most important (i.e. it has 100% importance). Now indicate the relative importance (in %) to this improvement of each other criterion's improvement using the sliders below.";
      expect(result).toEqual(expectedResult);
    });

    it('should return a complete swing statement using a template', () => {
      const showPercentages = false;
      const pvf: ILinearPvf = {
        direction: 'increasing',
        range: [0, 1],
        type: 'linear'
      };
      const template = 'Template %criterion1%.';
      const result: string = getSwingStatement(
        criteria[0],
        pvf,
        showPercentages,
        template
      );
      const expectedResult = 'Template title1.';
      expect(result).toEqual(expectedResult);
    });

    it('should return a complete swing statement as percentages', () => {
      const showPercentages = true;
      const pvf: ILinearPvf = {
        direction: 'increasing',
        range: [0, 1],
        type: 'linear'
      };
      const result: string = getSwingStatement(
        criteria[2],
        pvf,
        showPercentages
      );
      const expectedResult =
        "You've indicated that improving title3 from 0 % to 100 % is the most important (i.e. it has 100% importance). Now indicate the relative importance (in %) to this improvement of each other criterion's improvement using the sliders below.";
      expect(result).toEqual(expectedResult);
    });

    it('should return a complete swing statement as decimals', () => {
      const showPercentages = false;
      const pvf: ILinearPvf = {
        direction: 'increasing',
        range: [0, 1],
        type: 'linear'
      };
      const result: string = getSwingStatement(
        criteria[2],
        pvf,
        showPercentages
      );
      const expectedResult =
        "You've indicated that improving title3 from 0  to 1  is the most important (i.e. it has 100% importance). Now indicate the relative importance (in %) to this improvement of each other criterion's improvement using the sliders below.";
      expect(result).toEqual(expectedResult);
    });
  });
});
