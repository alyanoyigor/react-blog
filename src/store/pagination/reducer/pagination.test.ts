import paginationReducer, {
  paginationChangePage,
  paginationChangeItemsPerPage,
  SliceState,
} from './pagination';

describe('Testing pagination reducer', () => {
  const initialState: SliceState = {
    currentPage: 1,
    itemsPerPage: 10,
  };

  test('should return the initial state', () => {
    expect(paginationReducer(undefined, { type: undefined })).toEqual(
      initialState
    );
  });

  test('should change page', () => {
    expect(
      paginationReducer(initialState, paginationChangePage({ page: 5 }))
    ).toEqual({ currentPage: 5, itemsPerPage: 10 });
  });

  test('should change items per page', () => {
    expect(
      paginationReducer(
        initialState,
        paginationChangeItemsPerPage({ itemsPerPage: 25 })
      )
    ).toEqual({ currentPage: 1, itemsPerPage: 25 });
  });
});
