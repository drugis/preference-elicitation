import Tooltip from '@material-ui/core/Tooltip';
import React, {useContext} from 'react';
import {ElicitationContext} from 'src/ElicitationContext/ElicitationContext';
import ICriterion from 'src/Interface/ICriterion';
import {getUnitLabel} from 'src/Util/util';

export default function CriterionSituation({
  criterion,
  displayValue
}: {
  criterion: ICriterion;
  displayValue: number;
}) {
  const {showPercentages} = useContext(ElicitationContext);

  return (
    <ul>
      <li id={`situation-${criterion.id}`}>
        <Tooltip
          disableHoverListener={!criterion.description}
          title={criterion.description ? criterion.description : ''}
        >
          <span
            id={`situation-title-${criterion.id}`}
            className="criterion-title"
          >
            {criterion.title}
          </span>
        </Tooltip>
        : <span id={`situation-value-${criterion.id}`}>{displayValue}</span>{' '}
        {getUnitLabel(
          criterion.dataSources[0].unitOfMeasurement,
          showPercentages
        )}
      </li>
    </ul>
  );
}
