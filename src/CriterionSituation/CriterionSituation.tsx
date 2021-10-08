import {Typography} from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import {useContext} from 'react';
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
        <Typography>
          <Tooltip
            disableHoverListener={!criterion.description}
            title={criterion.description ? criterion.description : ''}
          >
            <span
              id={`situation-title-${criterion.id}`}
              className="criterion-title"
            >{`${criterion.title}: `}</span>
          </Tooltip>
          <span
            id={`situation-value-${criterion.id}`}
          >{`${displayValue} ${getUnitLabel(
            criterion.dataSources[0].unitOfMeasurement,
            showPercentages
          )}`}</span>
        </Typography>
      </li>
    </ul>
  );
}
