import ICriterion from '@shared/interface/ICriterion';
import IRatioBoundConstraint from '@shared/interface/Scenario/IRatioBoundConstraint';
export declare function buildInitialImprecisePreferences(criteria: ICriterion[], mostImportantCriterionId: string): Record<string, IRatioBoundConstraint>;
