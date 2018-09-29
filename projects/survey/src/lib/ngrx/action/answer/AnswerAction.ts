import {AppliableAction} from '../AppliableAction';
import {Answer} from '../../../model/answer/Answer';

export abstract class AnswerAction extends AppliableAction<Answer> {
  abstract apply(state: Answer[]): Answer[];
}
