import { createSelector } from 'reselect';

const bookListCreateBookStateSelector = (state) => state.bookListCreateBook;

export const bookListCreateBookLoadingSelector = createSelector(
  bookListCreateBookStateSelector,
  (bookListCreateBook) => bookListCreateBook.loading
);

export const bookListCreateBookDataSelector = createSelector(
  bookListCreateBookStateSelector,
  (bookListCreateBook) => bookListCreateBook.data
);

export const bookListCreateBookErrorSelector = createSelector(
  bookListCreateBookStateSelector,
  (bookListCreateBook) => bookListCreateBook.error
);
