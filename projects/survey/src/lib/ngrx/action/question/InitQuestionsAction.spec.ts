import {InitQuestionsAction} from './InitQuestionsAction';

describe('InitQuestionsAction', () => {
  it('should not affect state when apply(falsy or !Question[])', () => {
    const action = new InitQuestionsAction(null);
    const state = [];

    expect(action.apply(state)).toEqual(state);
  });

  it('should replace state with payload when apply(Question[])', () => {
    const payload = [
      null,
      null
    ];
    const action = new InitQuestionsAction(payload);

    expect(action.apply([])).toEqual(payload);
  });
});
