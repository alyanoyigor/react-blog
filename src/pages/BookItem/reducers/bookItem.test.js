import { bookItemFetchStart } from '../thunks/bookItem';
import bookItemReducer, { bookItemResetData } from './bookItem';

describe('Testing bookItem reducer', () => {
  const initialState = { data: {}, error: null, loading: true };

  test('should return the initial state', () => {
    const action = { type: undefined };
    const startedData = undefined;

    expect(bookItemReducer(startedData, action)).toEqual(initialState);
  });

  test('should reset data', () => {
    const startedData = { data: { _id: '1' }, error: 'ERROR', loading: false };
    const action = bookItemResetData();

    expect(bookItemReducer(startedData, action)).toEqual(initialState);
  });

  test('should pending fetch data', () => {
    const action = { type: bookItemFetchStart.pending.type };
    const startedData = { data: {}, error: 'ERROR', loading: false };
    const expectedData = {
      data: {},
      error: null,
      loading: true,
    };

    expect(bookItemReducer(startedData, action)).toEqual(expectedData);
  });

  test('should succeed fetch data', () => {
    const action = {
      type: bookItemFetchStart.fulfilled.type,
      payload: { data: { _id: '1' } },
    };
    const startedData = { data: {}, error: null, loading: true };
    const expectedData = {
      data: { _id: '1' },
      error: null,
      loading: false,
    };

    expect(bookItemReducer(startedData, action)).toEqual(expectedData);
  });

  test('should failed fetch data', () => {
    const ERROR = 'ERROR';
    const action = {
      type: bookItemFetchStart.rejected.type,
      payload: ERROR,
    };
    const startedData = { data: {}, error: null, loading: true };
    const expectedData = {
      data: {},
      error: ERROR,
      loading: false,
    };

    expect(bookItemReducer(startedData, action)).toEqual(expectedData);
  });
});
