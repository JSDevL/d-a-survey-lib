import {AppliableAction} from '../AppliableAction';

export abstract class LocaleAction extends AppliableAction<string> {
  abstract apply(state: string): string;
}
