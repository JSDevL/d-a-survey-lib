import {Question} from '../../model/question/Question';
import {QuestionAction} from '../action/question/QuestionAction';
import {QuestionToAnswerAction} from '../action/question/questionToAnswer/QuestionToAnswerAction';

const defaultState = [];

export const questionsToAnswerReducer = (state: Question[] = defaultState, action: QuestionAction) => {
  return (action && (action instanceof QuestionToAnswerAction) && action.apply(state)) || state || defaultState;
};
