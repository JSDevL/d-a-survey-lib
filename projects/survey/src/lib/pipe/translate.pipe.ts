import {Pipe, PipeTransform} from '@angular/core';
import {Translation} from '../model/Translation';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  transform(translations: Translation[], locale: string): any {
    if (!translations || !locale) {
      return '';
    }

    const translation = translations.find(t => t.locale === locale);

    if (!translation) {
      return '';
    }

    return translation.text;
  }

}
