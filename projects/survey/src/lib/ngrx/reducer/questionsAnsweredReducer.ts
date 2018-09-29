import {Question} from '../../model/question/Question';
import {QuestionAction} from '../action/question/QuestionAction';
import {QuestionsAnsweredAction} from '../action/question/questionsAnswered/QuestionsAnsweredAction';

const defaultState = [];

export const questionsAnsweredReducer = (state: Question[] = defaultState, action: QuestionAction) => {
  return (action && (action instanceof QuestionsAnsweredAction) && action.apply(state)) || state || defaultState;
};
