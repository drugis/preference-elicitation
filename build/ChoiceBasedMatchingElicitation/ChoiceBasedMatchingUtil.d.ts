import { ChartConfiguration } from 'c3';
import IChoiceBasedMatchingState from 'src/Interface/IChoiceBasedMatchingState';
import ICriterion from 'src/Interface/ICriterion';
import IPvf from 'src/Interface/TPvf';
export declare function buildInitialState(criteria: ICriterion[], pvfs: Record<string, IPvf>): IChoiceBasedMatchingState;
export declare function calculateTotalCbmSteps(criteria: ICriterion[]): number;
export declare function generatePieChartSettings(value: number, id: string): ChartConfiguration;
