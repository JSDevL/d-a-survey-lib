import {AppliableAction} from '../AppliableAction';
import {Question} from '../../../model/question/Question';

export abstract class QuestionAction extends AppliableAction<Question> {
  abstract apply(state: Question[]): Question[];
}
