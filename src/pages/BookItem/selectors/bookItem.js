import { createSelector } from 'reselect';

const bookItemStateSelector = (state) => state.bookItem;

export const bookItemSelector = createSelector(
  bookItemStateSelector,
  (bookItem) => ({
    loading: bookItem.loading,
    data: bookItem.data,
    error: bookItem.error,
  })
);
