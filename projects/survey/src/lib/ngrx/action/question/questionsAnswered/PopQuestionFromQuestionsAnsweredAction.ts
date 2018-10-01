import { QuestionsAnsweredAction } from './QuestionsAnsweredAction';
import { Question } from '../../../../model/question/Question';

export class PopQuestionFromQuestionsAnsweredAction extends QuestionsAnsweredAction {
  public readonly type = 'POP_QUESTION_FROM_QUESTIONS_ANSWERED_ACTION';

  apply(state: Question[]): Question[] {
    state.pop();
    return [...state];
  }
}
