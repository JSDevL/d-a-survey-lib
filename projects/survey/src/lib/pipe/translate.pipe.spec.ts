import {TranslatePipe} from './translate.pipe';
import {Translation} from '../model/Translation';

describe('TranslatePipe', () => {
  const pipe = new TranslatePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return empty string if no locale is provided', () => {
    expect(pipe.transform([], null)).toEqual('');
  });

  it('should return empty string if no translations are provided', () => {
    expect(pipe.transform(null, 'en')).toEqual('');
  });

  it('should return empty string if no translation for locale is found', () => {
    expect(pipe.transform([new Translation('en', 'Hello')], 'de')).toEqual('');
  });

  it('should return text string if translation is found', () => {
    expect(pipe.transform([new Translation('en', 'Hello')], 'en')).toEqual('Hello');

    const t = new Translation('', '');

    t.locale = 'de';
    t.text = 'Hello_de';

    expect(pipe.transform([new Translation('en', 'Hello'), t], 'de')).toEqual('Hello_de');
  });
});
