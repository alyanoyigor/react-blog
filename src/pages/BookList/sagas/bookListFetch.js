import { put, call, takeLatest } from 'redux-saga/effects';
import { getBookList } from '../../../api/books';
import {
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

export function* bookListFetchWatcher() {
  yield takeLatest(bookListFetchStart.type, bookListFetchSaga);
}
