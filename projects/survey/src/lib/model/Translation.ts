export class Translation {
  constructor(locale: string, text: string) {
    this._locale = locale;
    this._text = text;
  }

  private _locale: string;

  get locale(): string {
    return this._locale;
  }

  set locale(value: string) {
    this._locale = value;
  }

  private _text: string;

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }
}
