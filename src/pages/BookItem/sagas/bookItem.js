import { put, call, takeLatest } from 'redux-saga/effects';
import { getBookItem } from '../../../api/books';
import {
  bookItemFetchError,
  bookItemFetchInProgress,
  bookItemFetchSuccess,
} from '../reducers/bookItem';

function* bookFetchSaga({ payload: { id } }) {
  try {
    yield put(bookItemFetchInProgress());
    const data = yield call(getBookItem, id);
    yield put(bookItemFetchSuccess({ data }));
  } catch (error) {
    yield put(bookItemFetchError());
  }
}

export function* bookFetchWatcher() {
  yield takeLatest('bookItem/bookItemFetchStart', bookFetchSaga);
}
