import React from 'react';
import IRanking from 'src/Interface/IRanking';
import { TPvf } from 'src/Interface/TPvf';
import ICriterion from '../Interface/ICriterion';
import IExactSwingRatio from '../Interface/IExactSwingRatio';
import IRatioBoundConstraint from '../Interface/IRatioBoundConstraint';
import { TElicitationMethod } from '../Types/TElicitationMethod';
import IElicitationContext from './IElicitationContext';
export declare const ElicitationContext: React.Context<IElicitationContext>;
export declare function ElicitationContextProviderComponent({ elicitationMethod, criteria, showPercentages, pvfs, cancelCallback, saveCallback, children }: {
    elicitationMethod: TElicitationMethod;
    criteria: ICriterion[];
    showPercentages: boolean;
    pvfs: Record<string, TPvf>;
    cancelCallback: () => void;
    saveCallback: (preferences: IExactSwingRatio[] | IRatioBoundConstraint[] | IRanking[]) => void;
    children: any;
}): JSX.Element;
