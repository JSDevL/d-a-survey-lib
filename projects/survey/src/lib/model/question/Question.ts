import {Answer} from '../answer/Answer';
import {Translation} from '../Translation';

export abstract class Question {
  private readonly _translations: Translation[];
  private readonly _answers: Answer[];
  private readonly _required: boolean;
  private readonly _note: string;

  protected constructor(translations: Translation[], answers: Answer[], required: boolean, note: string) {
    this._translations = translations;
    this._answers = answers;
    this._required = required;
    this._note = note;
  }

  get required(): boolean {
    return this._required;
  }

  get note(): string {
    return this._note;
  }

  get translations(): Translation[] {
    return this._translations;
  }

  get answers(): Answer[] {
    return this._answers;
  }
}
