import { createSelector } from 'reselect';

const bookListEditBookStateSelector = (state) => state.bookListEditBook;

export const bookListEditBookLoadingSelector = createSelector(
  bookListEditBookStateSelector,
  (bookListEditBook) => bookListEditBook.loading
);

export const bookListEditBookDataSelector = createSelector(
  bookListEditBookStateSelector,
  (bookListEditBook) => bookListEditBook.data
);

export const bookListEditBookErrorSelector = createSelector(
  bookListEditBookStateSelector,
  (bookListEditBook) => bookListEditBook.error
);
