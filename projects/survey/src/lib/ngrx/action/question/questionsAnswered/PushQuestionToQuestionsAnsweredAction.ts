import {QuestionsAnsweredAction} from './QuestionsAnsweredAction';
import {Question} from '../../../../model/question/Question';

export class PushQuestionToQuestionsAnsweredAction extends QuestionsAnsweredAction {
  readonly type = 'PUSH_QUESTION_TO_QUESTIONS_ANSWERED_ACTION';
  private readonly payload: Question;

  constructor(payload: Question) {
    super();
    this.payload = payload;
  }

  apply(state: Question[]): Question[] {
    if (this.payload) {
      return [...state, this.payload];
    }

    return state;
  }
}
