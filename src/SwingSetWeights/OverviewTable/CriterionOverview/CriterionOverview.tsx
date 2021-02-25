import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from '@material-ui/core/Tooltip';
import React, {useContext} from 'react';
import {ElicitationContext} from 'src/ElicitationContext/ElicitationContext';
import {
  canBePercentage,
  getBest,
  getUnitLabel,
  getWorst
} from 'src/ElicitationUtil/ElicitationUtil';
import ImpreciseSwingSlider from 'src/ImpreciseSwingElicitation/ImpreciseSwingSlider/ImpreciseSwingSlider';
import ICriterion from 'src/Interface/ICriterion';
import PreciseSwingSlider from 'src/PreciseSwingElicitation/PreciseSwingSlider/PreciseSwingSlider';

export default function CriterionOverview({
  criterion
}: {
  criterion: ICriterion;
}) {
  const {pvfs, showPercentages, elicitationMethod} = useContext(
    ElicitationContext
  );
  const unitType = criterion.dataSources[0].unitOfMeasurement.type;
  const usePercentage = showPercentages && canBePercentage(unitType);

  function renderSwingSlider(): JSX.Element {
    if (elicitationMethod === 'precise') {
      return <PreciseSwingSlider criterion={criterion} />;
    } else if (elicitationMethod === 'imprecise') {
      return <ImpreciseSwingSlider criterion={criterion} />;
    }
  }

  return (
    <TableRow key={criterion.id}>
      <TableCell>
        <Tooltip
          disableHoverListener={!criterion.description}
          title={criterion.description ? criterion.description : ''}
        >
          <span className="criterion-title">{criterion.title}</span>
        </Tooltip>
      </TableCell>
      <TableCell>
        {getUnitLabel(
          criterion.dataSources[0].unitOfMeasurement,
          showPercentages
        )}
      </TableCell>
      <TableCell align="center">
        {getWorst(pvfs[criterion.id], usePercentage)}
      </TableCell>
      <TableCell align="center">
        {getBest(pvfs[criterion.id], usePercentage)}
      </TableCell>
      <TableCell align="center">{renderSwingSlider()}</TableCell>
    </TableRow>
  );
}
