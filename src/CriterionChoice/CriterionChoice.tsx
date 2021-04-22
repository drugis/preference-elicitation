import {FormControlLabel} from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import Tooltip from '@material-ui/core/Tooltip';
import React, {useContext} from 'react';
import {ElicitationContext} from 'src/ElicitationContext/ElicitationContext';
import ICriterion from 'src/Interface/ICriterion';
import {canBePercentage} from 'src/Util/util';
import {getBest, getWorst} from '../Util/util';

export default function CriterionChoice({criterion}: {criterion: ICriterion}) {
  const {pvfs, showPercentages} = useContext(ElicitationContext);
  const pvf = pvfs[criterion.id];
  const unitType = criterion.dataSources[0].unitOfMeasurement.type;
  const usePercentage = showPercentages && canBePercentage(unitType);
  const worst = getWorst(pvf, usePercentage);
  const best = getBest(pvf, usePercentage);

  const label: JSX.Element = (
    <>
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
      {` from ${worst} to ${best}`}
    </>
  );

  return (
    <FormControlLabel
      id={`ranking-choice-${criterion.id}`}
      control={<Radio value={criterion.id} color="primary" />}
      label={label}
    />
  );
}
