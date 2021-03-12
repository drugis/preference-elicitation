import ICriterion from 'src/Interface/ICriterion';
import IExactSwingRatio from 'src/Interface/IExactSwingRatio';
import IRatioBoundConstraint from 'src/Interface/IRatioBoundConstraint';
import { TPvf } from 'src/Interface/TPvf';
export declare const DEFAULT_PRECISE_TEMPLATE = "You've indicated that improving %criterion1% from %worst1% %unit1% to %best1% %unit1% is the most important (i.e. it has 100% importance). Now indicate the relative importance (in %) to this improvement of each other criterion's improvement using the sliders below.";
export declare function buildInitialPrecisePreferences(criteria: ICriterion[], mostImportantCriterionId: string): Record<string, IExactSwingRatio>;
export declare function buildInitialImprecisePreferences(criteria: ICriterion[], mostImportantCriterionId: string): Record<string, IRatioBoundConstraint>;
export declare function getSwingStatement(criterion: ICriterion, pvf: TPvf, usePercentage: boolean, template?: string): string;
