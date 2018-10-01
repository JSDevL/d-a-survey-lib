import { PushQuestionToQuestionsToAnswerAction } from './PushQuestionToQuestionsToAnswerAction';
import { ChoiceQuestion } from '../../../../model/question/ChoiceQuestion';

describe('PushQuestionToQuestionsToAnswerAction$', () => {
  it('should not change state if action.payload = null or invalid Question)', () => {
    const payload = null;
    const action = new PushQuestionToQuestionsToAnswerAction(payload);
    const state = [null];

    expect(action.apply(state)).toEqual([null]);
  });

  it('should push question when action.payload = valid question', function() {
    const payload = new ChoiceQuestion(null, null, null, null);
    const action = new PushQuestionToQuestionsToAnswerAction(payload);
    const state = [null];

    expect(action.apply(state)).toEqual([null, payload]);
  });
});
