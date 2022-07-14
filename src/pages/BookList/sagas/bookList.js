import { put, call, takeLatest } from 'redux-saga/effects';
import { createBook, getBookList } from '../../../api/books';
import {
  bookListAddBookError,
  bookListAddBookInProgress,
  bookListAddBookStart,
  bookListAddBookSuccess,
  bookListFetchError,
  bookListFetchInProgress,
  bookListFetchStart,
  bookListFetchSuccess,
} from '../reducers/bookList';

function* bookListFetchSaga() {
  try {
    yield put(bookListFetchInProgress());
    const bookList = yield call(getBookList);
    yield put(bookListFetchSuccess({ data: bookList.data }));
  } catch (error) {
    yield put(bookListFetchError());
  }
}

function* bookListAddBookSaga({ payload: { bookData } }) {
  try {
    yield put(bookListAddBookInProgress());
    const book = yield call(createBook, bookData);
    yield put(bookListAddBookSuccess({ data: book.data }));
  } catch (error) {
    yield put(bookListAddBookError());
  }
}

export function* bookListFetchWatcher() {
  yield takeLatest(bookListFetchStart.type, bookListFetchSaga);
  yield takeLatest(bookListAddBookStart.type, bookListAddBookSaga);
}
