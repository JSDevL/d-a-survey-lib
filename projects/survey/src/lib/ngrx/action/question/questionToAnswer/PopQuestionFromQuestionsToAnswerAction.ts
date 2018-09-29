import {Question} from '../../../../model/question/Question';
import {QuestionToAnswerAction} from './QuestionToAnswerAction';

export class PopQuestionFromQuestionsToAnswerAction extends QuestionToAnswerAction {
  type = 'POP_QUESTION_FROM_QUESTIONS_TO_ANSWER';

  apply(state: Question[]): Question[] {
    state.pop();
    return [...state];
  }
}
