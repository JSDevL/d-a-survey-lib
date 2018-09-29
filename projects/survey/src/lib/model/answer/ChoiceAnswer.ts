import {Answer} from './Answer';
import {Translation} from '../Translation';
import {Question} from '../question/Question';

export class ChoiceAnswer extends Answer {
  private readonly _translations: Translation[];
  private readonly _followUpQuestions: Question[];

  constructor(translations: Translation[], followUpQuestions: Question[], payload?: any) {
    super(payload);
    this._translations = translations;
    this._followUpQuestions = followUpQuestions;
  }

  get translations(): Translation[] {
    return this._translations;
  }

  get followUpQuestions(): Question[] {
    return this._followUpQuestions;
  }
}
