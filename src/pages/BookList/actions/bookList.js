import {
  BOOK_LIST_FETCH_ERROR,
  BOOK_LIST_FETCH_IN_PROGRESS,
  BOOK_LIST_FETCH_SUCCESS,
  BOOK_LIST_FETCH_START,
} from '../action-types/bookList';

export const bookListFetchStart = () => ({
  type: BOOK_LIST_FETCH_START,
});

export const bookListFetchInProgress = () => ({
  type: BOOK_LIST_FETCH_IN_PROGRESS,
});

export const bookListFetchSuccess = (data) => ({
  type: BOOK_LIST_FETCH_SUCCESS,
  payload: { data },
});

export const bookListFetchError = () => ({
  type: BOOK_LIST_FETCH_ERROR,
});
