import IChoiceBasedMatchingState from 'src/Interface/IChoiceBasedMatchingState';

export default interface IChoiceBasedMatchingContext {
  cbmState: IChoiceBasedMatchingState;
  currentAnswer: 'A' | 'B' | '';
  totalSteps: number;
  goBack: () => void;
  setCurrentAnswer: (currentChoice: 'A' | 'B' | '') => void;
  updateState: () => void;
  isStateLoading: boolean;
}
