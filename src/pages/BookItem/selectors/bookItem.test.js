import { bookItemSelector } from './bookItem';

describe('bookItem selectors', () => {
  let state;

  beforeEach(() => {
    bookItemSelector.resetRecomputations();

    state = {
      bookItem: {
        data: { id: '1' },
        error: null,
        loading: true,
      },
    };
  });

  test('should return correct data', () => {
    const bookData = bookItemSelector(state);
    const expectedData = state.bookItem;

    expect(bookData).toEqual(expectedData);
  });

  test('should do not compute when changes not the bookItem data', () => {
    bookItemSelector(state);
    state = { ...state, pagination: { currentPage: 1 } };
    bookItemSelector(state);

    expect(bookItemSelector.recomputations()).toEqual(1);
  });

  test('should do not compute with same state', () => {
    bookItemSelector(state);
    expect(bookItemSelector.recomputations()).toEqual(1);

    bookItemSelector(state);
    expect(bookItemSelector.recomputations()).toEqual(1);
  });

  test('should recompute with new data', () => {
    bookItemSelector(state);

    state = {
      ...state,
      bookItem: {
        ...state.bookItem,
        data: { ...state.bookItem.data, title: 'Book 1' },
      },
    };

    bookItemSelector(state);
    expect(bookItemSelector.recomputations()).toEqual(2);
  });
});
