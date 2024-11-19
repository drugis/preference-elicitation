import {ChartConfiguration} from 'c3';
import _ from 'lodash';
import IChoiceBasedMatchingState from 'src/Interface/IChoiceBasedMatchingState';
import ICriterion from 'src/Interface/ICriterion';
import IPvf from 'src/Interface/TPvf';
import IReducedCriterion from './IReducedCriterion';

export function buildInitialState(
  criteria: ICriterion[],
  pvfs: Record<string, IPvf>
): IChoiceBasedMatchingState {
  return {
    answersAndQuestions: [],
    criteria: _.map(
      criteria,
      (criterion: ICriterion): IReducedCriterion => {
        const sortedScales = _.sortBy(pvfs[criterion.id].range) as [
          number,
          number
        ];
        return {
          id: criterion.id,
          pvf: {
            direction: pvfs[criterion.id].direction,
            range: sortedScales,
            type: 'linear'
          }
        };
      }
    )
  };
}

export function calculateTotalCbmSteps(criteria: ICriterion[]): number {
  if (_.size(criteria) <= 4) {
    return (_.size(criteria) - 1) * 4;
  } else {
    return (_.size(criteria) - 2) * 4;
  }
}

export function generatePieChartSettings(
  value: number,
  id: string
): ChartConfiguration {
  const order = value <= 50 ? 'asc' : 'desc';
  return {
    bindto: `#pie-chart-${id}`,
    data: {
      columns: [
        ['1', value],
        ['2', 100 - value]
      ],
      type: 'pie',
      colors: {
        1: '#4290f5', //light blue
        2: '#f5eded' //Pink/grey
      },
      order: order
    },
    legend: {
      show: false
    },
    pie: {
      label: {
        show: false
      }
    },
    tooltip: {
      show: false
    }
  };
}
