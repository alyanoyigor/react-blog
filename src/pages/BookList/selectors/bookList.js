import { createSelector } from 'reselect';

const stateSelector = (state) => state;
const bookListStateSelector = (state) => state.bookList;
const paginationStateSelector = (state) => state.pagination;

export const bookListLoadingSelector = createSelector(
  bookListStateSelector,
  (bookList) => bookList.loading
);

export const bookListDataSelector = createSelector(
  bookListStateSelector,
  (bookList) => bookList.data
);

export const bookListErrorSelector = createSelector(
  bookListStateSelector,
  (bookList) => bookList.error
);

export const bookListCurrentPageSelector = createSelector(
  paginationStateSelector,
  (pagination) => pagination.currentPage
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

    return bookList.data.slice(firstBookIndex, lastBookIndex);
  }
);
