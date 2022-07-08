import { createSelector } from "reselect";

const bookItemStateSelector = (state) => state.bookItem;

export const bookItemLoadingSelector = createSelector(
  bookItemStateSelector,
  (bookItem) => bookItem.loading
);

export const bookItemDataSelector = createSelector(
  bookItemStateSelector,
  (bookItem) => bookItem.data
);

export const bookItemErrorSelector = createSelector(
  bookItemStateSelector,
  (bookItem) => bookItem.error
);
