/// <reference types="react" />
import ICriterion from 'src/Interface/ICriterion';
import IExactSwingRatio from 'src/Interface/IExactSwingRatio';
import IRanking from 'src/Interface/IRanking';
import IRatioBoundConstraint from 'src/Interface/IRatioBoundConstraint';
import { TPvf } from 'src/Interface/TPvf';
import { TElicitationMethod } from 'src/Types/TElicitationMethod';
export default function PreferenceElicitation({ elicitationMethod, criteria, showPercentages, pvfs, cancelCallback, saveCallback }: {
    elicitationMethod: TElicitationMethod;
    criteria: ICriterion[];
    showPercentages: boolean;
    pvfs: Record<string, TPvf>;
    cancelCallback: () => void;
    saveCallback: (preferences: IExactSwingRatio[] | IRatioBoundConstraint[] | IRanking[]) => void;
}): JSX.Element;
