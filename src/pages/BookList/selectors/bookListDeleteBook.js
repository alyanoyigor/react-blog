import { createSelector } from 'reselect';

const bookListDeleteBookStateSelector = (state) => state.bookListDeleteBook;

export const bookListDeleteBookLoadingSelector = createSelector(
  bookListDeleteBookStateSelector,
  (bookListDeleteBook) => bookListDeleteBook.loading
);

export const bookListDeleteBookErrorSelector = createSelector(
  bookListDeleteBookStateSelector,
  (bookListDeleteBook) => bookListDeleteBook.error
);

export const bookListDeleteBookDataSelector = createSelector(
  bookListDeleteBookStateSelector,
  (bookListDeleteBook) => bookListDeleteBook.data
);
