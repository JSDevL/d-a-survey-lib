import {PushQuestionToQuestionsAnsweredAction} from './PushQuestionToQuestionsAnsweredAction';
import {ChoiceQuestion} from '../../../../model/question/ChoiceQuestion';
import {Translation} from '../../../../model/Translation';
import {Answer} from '../../../../model/answer/Answer';

describe('PushQuestionToQuestionsAnsweredAction', () => {
  class ExampleQuestion extends ChoiceQuestion {
    constructor(translations: Translation[], answers: Answer[], required: boolean, note: string) {
      super(translations, answers, required, note);
    }
  }

  it('should not change state if action.payload = null or invalid Question)', () => {
    const action = new PushQuestionToQuestionsAnsweredAction(null);

    expect(action.apply([null, null])).toEqual([null, null]);
  });

  it('should push question when action.payload = valid question', () => {
    const question = new ExampleQuestion(null, null, null, null);
    const action = new PushQuestionToQuestionsAnsweredAction(question);

    expect(action.apply([null, null])).toEqual([null, null, question]);
  });
});
