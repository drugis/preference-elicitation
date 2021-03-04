/// <reference types="react" />
import { IHelpInfo } from 'help-popup';
import ICriterion from 'src/Interface/ICriterion';
import IExactSwingRatio from 'src/Interface/IExactSwingRatio';
import IRanking from 'src/Interface/IRanking';
import IRatioBoundConstraint from 'src/Interface/IRatioBoundConstraint';
import { TPvf } from 'src/Interface/TPvf';
import { TElicitationMethod } from 'src/Types/TElicitationMethod';
export default function PreferenceElicitation({ criteria, elicitationMethod, manualHost, manualLexicon, manualPath, pvfs, showPercentages, cancelCallback, saveCallback }: {
    criteria: ICriterion[];
    elicitationMethod: TElicitationMethod;
    manualHost: string;
    manualLexicon: Record<string, IHelpInfo>;
    manualPath: string;
    pvfs: Record<string, TPvf>;
    showPercentages: boolean;
    cancelCallback: () => void;
    saveCallback: (preferences: IExactSwingRatio[] | IRatioBoundConstraint[] | IRanking[]) => void;
}): JSX.Element;
