import {Translation} from '../Translation';
import {Question} from './Question';
import {Answer} from '../answer/Answer';

export abstract class ChoiceQuestion extends Question {
  constructor(translations: Translation[], answers: Answer[], required: boolean, note: string) {
    super(translations, answers, required, note);
  }
}
