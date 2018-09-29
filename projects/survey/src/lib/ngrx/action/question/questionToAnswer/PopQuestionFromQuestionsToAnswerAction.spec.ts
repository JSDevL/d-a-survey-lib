import {PopQuestionFromQuestionsToAnswerAction} from './PopQuestionFromQuestionsToAnswerAction';

describe('PopQuestionFromQuestionsToAnswerAction', () => {
  it('should pop question from state', () => {
    const action = new PopQuestionFromQuestionsToAnswerAction();
    const q1 = null;
    const q2 = null;
    const state = [q1, q2];

    expect(action.apply(state)).toEqual([q1]);
  });
});
