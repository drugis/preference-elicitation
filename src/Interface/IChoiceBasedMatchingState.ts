import IAnswerAndQuestion from 'src/ChoiceBasedMatchingElicitation/IAnswerAndQuestion';
import IReducedCriterion from 'src/ChoiceBasedMatchingElicitation/IReducedCriterion';
import IUpperRatioConstraint from './IUpperRatioConstraint';

export default interface IChoiceBasedMatchingState {
  preferences?: IUpperRatioConstraint[];
  answersAndQuestions: IAnswerAndQuestion[];
  criteria: IReducedCriterion[];
}
