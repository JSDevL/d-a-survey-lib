import {LocaleAction} from '../action/locale/localeAction';

const defaultState = 'en';

export const localeReducer = (state: string = defaultState, action: LocaleAction) => {
  return (action && (action instanceof LocaleAction) && action.apply(state)) || state || defaultState;
};
