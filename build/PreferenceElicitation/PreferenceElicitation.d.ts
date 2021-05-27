/// <reference types="react" />
import { IHelpInfo } from 'help-popup';
import ICriterion from 'src/Interface/ICriterion';
import IExactSwingRatio from 'src/Interface/IExactSwingRatio';
import IRanking from 'src/Interface/IRanking';
import IRatioBoundConstraint from 'src/Interface/IRatioBoundConstraint';
import { TPvf } from 'src/Interface/TPvf';
import { TElicitationMethod } from 'src/Types/TElicitationMethod';
export default function PreferenceElicitation({ criteria, elicitationMethod, manualHost, manualLexicon, manualPath, previousCallback, pvfs, showPercentages, stepSizesByCriterion, cancelCallback, saveCallback, template }: {
    criteria: ICriterion[];
    elicitationMethod: TElicitationMethod;
    manualHost: string;
    manualLexicon: Record<string, IHelpInfo>;
    manualPath: string;
    previousCallback?: () => void;
    pvfs: Record<string, TPvf>;
    showPercentages: boolean;
    stepSizesByCriterion: Record<string, number>;
    cancelCallback?: () => void;
    saveCallback: (preferences: IExactSwingRatio[] | IRatioBoundConstraint[] | IRanking[]) => void;
    template?: string;
}): JSX.Element;
