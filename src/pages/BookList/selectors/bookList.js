import { createSelector } from 'reselect';

const stateSelector = (state) => state;
const paginationStateSelector = (state) => state.pagination;
const bookListFetchStateSelector = (state) => state.bookList.fetchBooks;
const bookListCreateBookStateSelector = (state) => state.bookList.createBook;
const bookListDeleteBookStateSelector = (state) => state.bookList.deleteBook;
const bookListEditBookStateSelector = (state) => state.bookList.editBook;

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
  stateSelector,
  ({ pagination, bookList }) => {
    const { itemsPerPage, currentPage } = pagination;
    const lastBookIndex = itemsPerPage * currentPage;
    const firstBookIndex = lastBookIndex - itemsPerPage;

    return bookList.fetchBooks.data.slice(firstBookIndex, lastBookIndex);
  }
);
