import {Action} from '@ngrx/store';

export abstract class AppliableAction<T> implements Action {
  abstract type;

  abstract apply(state: T[] | T): T[] | T;
}
