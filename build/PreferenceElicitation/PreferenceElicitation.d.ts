/// <reference types="react" />
import ICriterion from 'src/Interface/ICriterion';
import IExactSwingRatio from 'src/Interface/IExactSwingRatio';
import IRanking from 'src/Interface/IRanking';
import IRatioBoundConstraint from 'src/Interface/IRatioBoundConstraint';
import { TPvf } from 'src/Interface/TPvf';
import { TElicitationMethod } from 'src/Types/TElicitationMethod';
export default function PreferenceElicitation({ elicitationMethod, InlineHelp, criteria, pvfs, showPercentages, cancelCallback, saveCallback }: {
    elicitationMethod: TElicitationMethod;
    InlineHelp: ({ helpId, children }: {
        helpId: string;
        children: any;
    }) => JSX.Element;
    criteria: ICriterion[];
    pvfs: Record<string, TPvf>;
    showPercentages: boolean;
    cancelCallback: () => void;
    saveCallback: (preferences: IExactSwingRatio[] | IRatioBoundConstraint[] | IRanking[]) => void;
}): JSX.Element;
