import _ from 'lodash';
import ICriterion from 'src/Interface/ICriterion';
import IExactSwingRatio from 'src/Interface/IExactSwingRatio';
import IRatioBoundConstraint from 'src/Interface/IRatioBoundConstraint';
import {TPvf} from 'src/Interface/TPvf';
import {getBest, getUnitLabel, getWorst} from 'src/Util/util';

export const DEFAULT_PRECISE_TEMPLATE =
  "You've indicated that improving %criterion1% from %worst1% %unit1% to %best1% %unit1% is the most important (i.e. it has 100% importance). Now indicate the relative importance (in %) to this improvement of each other criterion's improvement using the sliders below.";

export function buildInitialPrecisePreferences(
  criteria: ICriterion[],
  mostImportantCriterionId: string
): Record<string, IExactSwingRatio> {
  return _(criteria)
    .filter(
      (criterion: ICriterion): boolean =>
        criterion.id !== mostImportantCriterionId
    )
    .map((criterion: ICriterion): [string, IExactSwingRatio] => {
      const preference: IExactSwingRatio = {
        criteria: [mostImportantCriterionId, criterion.id],
        elicitationMethod: 'precise',
        type: 'exact swing',
        ratio: 1
      };
      return [criterion.id, preference];
    })
    .fromPairs()
    .value();
}

export function buildInitialImprecisePreferences(
  criteria: ICriterion[],
  mostImportantCriterionId: string
): Record<string, IRatioBoundConstraint> {
  return _(criteria)
    .reject(['id', mostImportantCriterionId])
    .keyBy('id')
    .mapValues(
      (criterion: ICriterion): IRatioBoundConstraint => {
        const preference: IRatioBoundConstraint = {
          criteria: [mostImportantCriterionId, criterion.id],
          elicitationMethod: 'imprecise',
          type: 'ratio bound',
          bounds: [1, 100]
        };
        return preference;
      }
    )
    .value();
}

export function getSwingStatement(
  criterion: ICriterion,
  pvf: TPvf,
  usePercentage: boolean,
  template?: string
): string {
  const unit = criterion.dataSources[0].unitOfMeasurement;
  const label = getUnitLabel(unit, usePercentage);
  const swingTemplate = template ? template : DEFAULT_PRECISE_TEMPLATE;
  return swingTemplate
    .replace(/%criterion1%/gi, criterion.title)
    .replace(/%unit1%/gi, label)
    .replace(/%worst1%/gi, String(getWorst(pvf, usePercentage)))
    .replace(/%best1%/gi, String(getBest(pvf, usePercentage)));
}
