import {FormControlLabel} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import React, {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';
import {ElicitationContext} from 'src/ElicitationContext/ElicitationContext';
import {ChoiceBasedMatchingContext} from '../ChoiceBasedMatchingContext';
import IChoiceBasedMatchingQuestion from '../IChoiceBasedMatchingQuestion';
import ChoiceBasedMatchingQuestion from './ChoiceBasedMatchingQuestion/ChoiceBasedMatchingQuestion';

export default function ChoiceBasedMatchingQuestionAndAnswer() {
  const {setErrorMessage} = useContext(ElicitationContext);
  const {
    currentAnswer,
    setCurrentAnswer,
    cbmState,
    isStateLoading
  } = useContext(ChoiceBasedMatchingContext);

  const [
    currentQuestion,
    setCurrentQuestion
  ] = useState<IChoiceBasedMatchingQuestion>();

  const getCurrentQuestion = useCallback(() => {
    if (cbmState.answersAndQuestions.length) {
      const [newCurrent] = cbmState.answersAndQuestions.slice(-1);
      setCurrentQuestion(newCurrent.question);
    } else {
      setErrorMessage('Error rertrieving the question');
    }
  }, [cbmState.answersAndQuestions, setErrorMessage]);

  useEffect(() => {
    if (!isStateLoading) {
      getCurrentQuestion();
    }
  }, [cbmState, getCurrentQuestion, isStateLoading]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value;
    if (newValue !== 'A' && newValue !== 'B') {
      setErrorMessage('Invalid alternative choice');
    } else {
      setCurrentAnswer(newValue);
    }
  }

  return !isStateLoading && currentQuestion ? (
    <>
      <ChoiceBasedMatchingQuestion currentQuestion={currentQuestion} />
      <Grid item xs={12}>
        <RadioGroup
          name="treatment-preference-radio"
          value={currentAnswer}
          onChange={handleChange}
        >
          <FormControlLabel
            id="treatment-a"
            control={<Radio value="A" />}
            label="Treatment A"
          />
          <FormControlLabel
            id="treatment-b"
            control={<Radio value="B" />}
            label="Treatment B"
          />
        </RadioGroup>
      </Grid>
    </>
  ) : (
    <Grid item xs={12}>
      <CircularProgress />
    </Grid>
  );
}
