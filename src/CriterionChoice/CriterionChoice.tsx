import Radio from '@material-ui/core/Radio';
import Tooltip from '@material-ui/core/Tooltip';
import React, {useContext} from 'react';
import {ElicitationContext} from 'src/ElicitationContext/ElicitationContext';
import {canBePercentage} from 'src/ElicitationUtil/ElicitationUtil';
import ICriterion from 'src/Interface/ICriterion';
import {getBest, getWorst} from '../ElicitationUtil/ElicitationUtil';

export default function CriterionChoice({criterion}: {criterion: ICriterion}) {
  const {pvfs, showPercentages} = useContext(ElicitationContext);
  const pvf = pvfs[criterion.id];
  const unitType = criterion.dataSources[0].unitOfMeasurement.type;
  const usePercentage = showPercentages && canBePercentage(unitType);

  return (
    <label id={`ranking-choice-${criterion.id}`}>
      <Radio value={criterion.id} />
      {`${pvf.direction} `}
      <Tooltip
        disableHoverListener={!criterion.description}
        title={criterion.description ? criterion.description : ''}
      >
        <span
          id={`criterion-option-${criterion.id}`}
          className="criterion-title"
        >
          {criterion.title}
        </span>
      </Tooltip>
      {` from ${getWorst(pvf, usePercentage)} to ${getBest(
        pvf,
        usePercentage
      )}`}
    </label>
  );
}
