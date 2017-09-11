import rootReducer from './index';

describe('rootReducer', () => {
  it('initializes the default state', () => {
    expect(rootReducer({}, {})).toEqual({ balance: 0, bitcoin: {} });
  });
});