import {ChartConfiguration, generate} from 'c3';
import React, {useEffect} from 'react';
import {generatePieChartSettings} from 'src/ChoiceBasedMatchingElicitation/ChoiceBasedMatchingUtil';
import significantDigits, {getPercentifiedValueLabel} from 'src/Util/util';

export default function PieChart({
  value,
  id
}: {
  value: number;
  id: string;
}): JSX.Element {
  useEffect(() => {
    const percentifiedValue = significantDigits(value * 100);
    const settings: ChartConfiguration = generatePieChartSettings(
      percentifiedValue,
      id
    );
    generate(settings);
  }, [value, id]);

  function renderPieChart(value: number, id: string): JSX.Element {
    return (
      <div
        style={{
          width: '100%',
          alignItems: 'center',
          alignContent: 'center',
          display: 'flex'
        }}
      >
        <div style={{width: '150px', height: '150px'}} id={`pie-chart-${id}`} />
        <div style={{textAlign: 'center'}}>{`${getPercentifiedValueLabel(
          value,
          true
        )} %`}</div>
      </div>
    );
  }

  return renderPieChart(value, id);
}
