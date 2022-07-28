import { bookItemFetchStart } from '../thunks/bookItem';
import bookItemReducer, { bookItemResetData } from './bookItem';

describe('Testing bookItem reducer', () => {
  const initialState = { data: {}, error: null, loading: true };

  test('should return the initial state', () => {
    expect(bookItemReducer(undefined, { type: undefined })).toEqual(
      initialState
    );
  });

  test('should reset data', () => {
    expect(
      bookItemReducer(
        { data: { _id: '1' }, error: 'ERROR', loading: false },
        bookItemResetData()
      )
    ).toEqual(initialState);
  });

  test('should pending fetch data', () => {
    const action = { type: bookItemFetchStart.pending };
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
      type: bookItemFetchStart.fulfilled,
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
    const action = {
      type: bookItemFetchStart.rejected,
    };
    const startedData = { data: {}, error: null, loading: true };
    const expectedData = {
      data: {},
      error: true,
      loading: false,
    };

    expect(bookItemReducer(startedData, action)).toEqual(expectedData);
  });
});
