import { put, call, takeLatest } from 'redux-saga/effects';
import { getBookItem } from '../../../api/books';
import {
  bookItemFetchError,
  bookItemFetchInProgress,
  bookItemFetchStart,
  bookItemFetchSuccess,
} from '../reducers/bookItem';

function* bookFetchSaga({ payload: { id } }) {
  try {
    yield put(bookItemFetchInProgress());
    const bookItem = yield call(getBookItem, id);
    yield put(bookItemFetchSuccess({ data: bookItem.data }));
  } catch (error) {
    yield put(bookItemFetchError());
  }
}

export function* bookFetchWatcher() {
  yield takeLatest(bookItemFetchStart.type, bookFetchSaga);
}
