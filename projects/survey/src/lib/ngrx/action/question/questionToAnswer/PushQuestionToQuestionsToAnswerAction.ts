import { QuestionsToAnswerAction } from './QuestionsToAnswerAction';
import { Question } from '../../../../model/question/Question';

export class PushQuestionToQuestionsToAnswerAction extends QuestionsToAnswerAction {
  public readonly type = 'PUSH_QUESTIONS_TO_QUESTIONS_TO_ANSWER_ACTION';

  private readonly payload: Question;

  constructor(payload: Question) {
    super();
    this.payload = payload;
  }

  apply(state: Question[]): Question[] {
    if (!this.payload) {
      return state;
    }

    return [...state, this.payload];
  }
}
