import { createSelector } from 'reselect';
import { RootState } from '../../../store';

const paginationStateSelector = (state: RootState) => state.pagination;
const bookListFetchStateSelector = (state: RootState) =>
  state.bookList.fetchBooks;
const bookListCreateBookStateSelector = (state: RootState) =>
  state.bookList.createBook;
const bookListDeleteBookStateSelector = (state: RootState) =>
  state.bookList.deleteBook;
const bookListEditBookStateSelector = (state: RootState) =>
  state.bookList.editBook;

export const bookListCreateSelector = createSelector(
  bookListCreateBookStateSelector,
  (state) => ({ data: state.data, loading: state.loading, error: state.error })
);

export const bookListFetchSelector = createSelector(
  bookListFetchStateSelector,
  (state) => ({ data: state.data, loading: state.loading, error: state.error })
);

export const bookListDeleteSelector = createSelector(
  bookListDeleteBookStateSelector,
  (state) => ({ data: state.data, loading: state.loading, error: state.error })
);

export const bookListEditSelector = createSelector(
  bookListEditBookStateSelector,
  (state) => ({
    data: state.data,
    fetchData: state.fetchData,
    submitLoading: state.submitLoading,
    fetchLoading: state.fetchLoading,
    error: state.error,
  })
);

export const bookListPaginationSelector = createSelector(
  paginationStateSelector,
  (pagination) => ({
    booksPerPage: pagination.itemsPerPage,
    currentPage: pagination.currentPage,
  })
);

export const bookListCurrentBooksSelector = createSelector(
  paginationStateSelector,
  bookListFetchStateSelector,
  (pagination, bookListFetch) => {
    const { itemsPerPage, currentPage } = pagination;
    const lastBookIndex = itemsPerPage * currentPage;
    const firstBookIndex = lastBookIndex - itemsPerPage;

    return bookListFetch.data.slice(firstBookIndex, lastBookIndex);
  }
);
