import {QuestionAction} from './QuestionAction';
import {Question} from '../../../model/question/Question';

export class InitQuestionsAction extends QuestionAction {
  public readonly type = 'INIT_QUESTION_ACTION';
  private readonly payload: Question[];

  constructor(payload: Question[]) {
    super();
    this.payload = payload;
  }

  apply(state: Question[]): Question[] {
    if (this.payload) {
      return [...this.payload];
    }

    return state;
  }
}
