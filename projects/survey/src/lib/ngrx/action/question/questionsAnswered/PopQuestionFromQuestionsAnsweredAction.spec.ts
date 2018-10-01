import { PopQuestionFromQuestionsAnsweredAction } from './PopQuestionFromQuestionsAnsweredAction';
import { ChoiceQuestion } from '../../../../model/question/ChoiceQuestion';

describe('PopQuestionFromQuestionsAnsweredAction$', () => {
  const action = new PopQuestionFromQuestionsAnsweredAction();

  it('should not pop question if no questionsAnswered', () => {
    const state = [];

    expect(action.apply(state)).toEqual([]);
  });

  it('should pop question if questionsAnswered', () => {
    const state = [
      new ChoiceQuestion(null, null, null, null),
      new ChoiceQuestion(null, null, null, null)
    ];

    expect(action.apply(state)).toEqual([
      new ChoiceQuestion(null, null, null, null)
    ]);
  });
});
