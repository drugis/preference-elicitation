import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import {useContext, useEffect, useState} from 'react';
import {ElicitationContext} from 'src/ElicitationContext/ElicitationContext';
import {
  getCurrentCriterion,
  getMatchingStatement
} from 'src/MatchingUtil/MatchingUtil';
import {canBePercentage} from 'src/Util/util';
import {getBest, getWorst} from '../../Util/util';
import MatchingSlider from './MatchingSlider/MatchingSlider';

export default function MatchingSetImportance() {
  const {
    pvfs,
    showPercentages,
    mostImportantCriterionId,
    currentStep,
    getCriterion,
    criteria,
    template
  } = useContext(ElicitationContext);

  const mostImportantCriterion = getCriterion(mostImportantCriterionId);
  const mostImportantUnitType =
    mostImportantCriterion.dataSources[0].unitOfMeasurement.type;

  const currentCriterion = getCurrentCriterion(
    criteria,
    mostImportantCriterionId,
    currentStep
  );
  const currentUnitType =
    currentCriterion.dataSources[0].unitOfMeasurement.type;

  const usePercentagesForMostImportantCriterion =
    showPercentages && canBePercentage(mostImportantUnitType);

  const usePercentagesForCurrentCriterion =
    showPercentages && canBePercentage(currentUnitType);

  const [statement, setStatement] = useState<string>(
    getMatchingStatement(
      mostImportantCriterion,
      currentCriterion,
      usePercentagesForMostImportantCriterion,
      usePercentagesForCurrentCriterion,
      pvfs,
      template
    )
  );

  useEffect(() => {
    setStatement(
      getMatchingStatement(
        mostImportantCriterion,
        currentCriterion,
        usePercentagesForMostImportantCriterion,
        usePercentagesForCurrentCriterion,
        pvfs,
        template
      )
    );
  }, [showPercentages, template, mostImportantCriterion, currentCriterion]);

  return (
    <Grid container item spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">{`Trade-off between ${mostImportantCriterion.title} and ${currentCriterion.title}`}</Typography>
      </Grid>
      <Grid item xs={12} id="matching-statement">
        <Typography dangerouslySetInnerHTML={{__html: statement}}></Typography>
      </Grid>
      <Grid item xs={12}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Criterion</TableCell>
              <TableCell align="center">Alternative A</TableCell>
              <TableCell align="center">Alternative B</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell id="most-important-criterion">
                {mostImportantCriterion.title}
              </TableCell>
              <TableCell align="center" id="most-important-worst">
                {getWorst(
                  pvfs[mostImportantCriterionId],
                  usePercentagesForMostImportantCriterion
                )}
              </TableCell>
              <TableCell align="center" id="matching-cell">
                <MatchingSlider currentCriterionId={currentCriterion.id} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell id="trade-off-criterion">
                {currentCriterion.title}
              </TableCell>
              <TableCell align="center" id="trade-off-best">
                {getBest(
                  pvfs[currentCriterion.id],
                  usePercentagesForCurrentCriterion
                )}
              </TableCell>
              <TableCell align="center" id="trade-off-worst">
                {getWorst(
                  pvfs[currentCriterion.id],
                  usePercentagesForCurrentCriterion
                )}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  );
}
