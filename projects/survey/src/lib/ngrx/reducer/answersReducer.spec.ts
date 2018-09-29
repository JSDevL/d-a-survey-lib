import {answersReducer} from './answersReducer';

describe('answersReducer', () => {
  it('should return default state initially', () => {
    expect(answersReducer(null, null)).toMatchSnapshot();
  });

  it('should return state for unqualified action', () => {
    expect(answersReducer([null, null], null)).toEqual([null, null]);
  });
});
