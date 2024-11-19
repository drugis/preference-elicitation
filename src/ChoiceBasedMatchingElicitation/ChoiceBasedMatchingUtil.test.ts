import IChoiceBasedMatchingState from 'src/Interface/IChoiceBasedMatchingState';
import ICriterion from 'src/Interface/ICriterion';
import {TPvf} from 'src/Interface/TPvf';
import {
  buildInitialState,
  calculateTotalCbmSteps
} from './ChoiceBasedMatchingUtil';

describe('buildInitialState', () => {
  it('should build the CBM state with criteria with sorted scales', () => {
    const criteria: ICriterion[] = [
      {
        id: 'critId1'
      } as ICriterion
    ];
    const pvfs: Record<string, TPvf> = {
      critId1: {
        range: [0, 1],
        direction: 'increasing',
        type: 'linear'
      }
    };
    const result: IChoiceBasedMatchingState = buildInitialState(criteria, pvfs);
    const expectedResult: IChoiceBasedMatchingState = {
      answersAndQuestions: [],
      criteria: [
        {
          id: 'critId1',
          pvf: {
            direction: 'increasing',
            range: [0, 1],
            type: 'linear'
          }
        }
      ]
    };
    expect(result).toEqual(expectedResult);
  });
});

describe('calculateTotalCbmSteps', () => {
  it('should return the correct number of steps if number of criteria is <= 4', () => {
    const criteria: ICriterion[] = [
      {id: 'critId1'} as ICriterion,
      {id: 'critId2'} as ICriterion
    ];
    const result: number = calculateTotalCbmSteps(criteria);
    expect(result).toEqual(4);
  });

  it('should return the correct number of steps if number of criteria is > 4', () => {
    const criteria: ICriterion[] = [
      {id: 'critId1'} as ICriterion,
      {id: 'critId2'} as ICriterion,
      {id: 'critId3'} as ICriterion,
      {id: 'critId4'} as ICriterion,
      {id: 'critId5'} as ICriterion
    ];
    const result: number = calculateTotalCbmSteps(criteria);
    expect(result).toEqual(12);
  });
});
