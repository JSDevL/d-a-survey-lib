import { Question } from '../../../../model/question/Question';
import { QuestionsToAnswerAction } from './QuestionsToAnswerAction';

export class PopQuestionFromQuestionsToAnswerAction extends QuestionsToAnswerAction {
  type = 'POP_QUESTION_FROM_QUESTIONS_TO_ANSWER';

  apply(state: Question[]): Question[] {
    state.pop();
    return [...state];
  }
}
