/// <reference types="react" />
import IRanking from 'src/Interface/IRanking';
import { TPvf } from 'src/Interface/TPvf';
import ICriterion from '../Interface/ICriterion';
import IExactSwingRatio from '../Interface/IExactSwingRatio';
import IRatioBoundConstraint from '../Interface/IRatioBoundConstraint';
import IUpperRatioConstraint from '../Interface/IUpperRatioConstraint';
import { TElicitationMethod } from '../Types/TElicitationMethod';
import IElicitationContext from './IElicitationContext';
export declare const ElicitationContext: import("react").Context<IElicitationContext>;
export declare function ElicitationContextProviderComponent({ elicitationMethod, criteria, showPercentages, showCbmPieChart, previousCallback, pvfs, cancelCallback, saveCallback, template, stepSizesByCriterion, setErrorMessage, children }: {
    elicitationMethod: TElicitationMethod;
    criteria: ICriterion[];
    showPercentages: boolean;
    showCbmPieChart: boolean;
    previousCallback?: () => void;
    pvfs: Record<string, TPvf>;
    cancelCallback?: () => void;
    saveCallback: (preferences: IExactSwingRatio[] | IRatioBoundConstraint[] | IRanking[] | IUpperRatioConstraint[], thresholdValuesByCriterion?: Record<string, number>) => Promise<any>;
    template?: string;
    stepSizesByCriterion: Record<string, number>;
    setErrorMessage: (error: string) => void;
    children: any;
}): JSX.Element;
