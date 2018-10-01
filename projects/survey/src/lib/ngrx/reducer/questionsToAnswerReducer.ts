import { Question } from '../../model/question/Question';
import { QuestionAction } from '../action/question/QuestionAction';
import { QuestionsToAnswerAction } from '../action/question/questionToAnswer/QuestionsToAnswerAction';

const defaultState = [];

export const questionsToAnswerReducer = (state: Question[] = defaultState, action: QuestionAction) => {
  return (action && (action instanceof QuestionsToAnswerAction) && action.apply(state)) || state || defaultState;
};
