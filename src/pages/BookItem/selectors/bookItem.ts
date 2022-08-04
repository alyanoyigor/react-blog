import { createSelector } from 'reselect';
import { RootState } from '../../../store';

const bookItemStateSelector = (state: RootState) => state.bookItem;

export const bookItemSelector = createSelector(
  bookItemStateSelector,
  (bookItem) => ({
    loading: bookItem.loading,
    data: bookItem.data,
    error: bookItem.error,
  })
);
