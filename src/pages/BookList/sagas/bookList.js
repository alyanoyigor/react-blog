import { put, call, takeLatest } from 'redux-saga/effects';
import { getBookList } from '../../../api/books';
import {
  bookListFetchError,
  bookListFetchInProgress,
  bookListFetchStart,
  bookListFetchSuccess,
} from '../reducers/bookList';

function* bookFetchSaga() {
  try {
    yield put(bookListFetchInProgress());
    const data = yield call(getBookList);
    yield put(bookListFetchSuccess({ data }));
  } catch (error) {
    yield put(bookListFetchError());
  }
}

export function* bookListFetchWatcher() {
  yield takeLatest(bookListFetchStart.type, bookFetchSaga);
}
