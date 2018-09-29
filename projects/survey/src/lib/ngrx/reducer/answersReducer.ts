import {Answer} from '../../model/answer/Answer';
import {AnswerAction} from '../action/answer/AnswerAction';

const defaultState = [];

export const answersReducer = (state: Answer[] = defaultState, action: AnswerAction) => {
  return (action && (action instanceof AnswerAction) && action.apply(state)) || state || defaultState;
};
