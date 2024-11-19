import Axios, {AxiosError, AxiosResponse} from 'axios';
import _ from 'lodash';
import React, {createContext, useContext, useEffect, useState} from 'react';
import {ElicitationContext} from 'src/ElicitationContext/ElicitationContext';
import IChoiceBasedMatchingState from 'src/Interface/IChoiceBasedMatchingState';
import {
  buildInitialState,
  calculateTotalCbmSteps
} from './ChoiceBasedMatchingUtil';
import IChoiceBasedMatchingContext from './IChoiceBasedMatchingContext';

export const ChoiceBasedMatchingContext =
  createContext<IChoiceBasedMatchingContext>({} as IChoiceBasedMatchingContext);

export function ChoiceBasedMatchingContextProviderComponent({
  children
}: {
  children: any;
}) {
  const {criteria, pvfs, setErrorMessage} = useContext(ElicitationContext);

  const initialState: IChoiceBasedMatchingState = buildInitialState(
    criteria,
    pvfs
  );
  const [currentAnswer, setCurrentAnswer] = useState<'A' | 'B' | ''>('');
  const [cbmState, setCbmState] = useState(initialState);
  const [isStateLoading, setIsStateLoading] = useState(true);

  const totalSteps = calculateTotalCbmSteps(criteria);

  useEffect(updateState, []); // FIXME: check these dependencies

  function updateState() {
    setIsStateLoading(true);
    let newState = _.cloneDeep(cbmState);
    if (currentAnswer) {
      newState.answersAndQuestions[
        newState.answersAndQuestions.length - 1
      ].answer = currentAnswer;
    }
    Axios.post(`/api/v2/patavi/choice-based-matching-state`, newState)
      .then((response: AxiosResponse<IChoiceBasedMatchingState>) => {
        setCurrentAnswer('');
        setCbmState(response.data);
        setIsStateLoading(false);
      })
      .catch((error: AxiosError) => {
        setErrorMessage(error.message + ', ' + error.response!.data);
      });
  }

  function goBack() {
    let newState = _.cloneDeep(cbmState);
    if (newState.preferences) {
      delete newState.preferences;
    } else {
      newState.answersAndQuestions.pop();
    }
    if (newState.answersAndQuestions.length) {
      const lastAnswer =
        newState.answersAndQuestions[newState.answersAndQuestions.length - 1]
          .answer!;
      setCurrentAnswer(lastAnswer);
    }
    setCbmState(newState);
  }

  return (
    <ChoiceBasedMatchingContext.Provider
      value={{
        cbmState,
        currentAnswer,
        totalSteps,
        goBack,
        setCurrentAnswer,
        updateState,
        isStateLoading
      }}
    >
      {children}
    </ChoiceBasedMatchingContext.Provider>
  );
}
