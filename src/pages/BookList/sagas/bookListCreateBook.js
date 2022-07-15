import { put, call, takeLatest } from 'redux-saga/effects';
import { createBook } from '../../../api/books';
import {
  bookListCreateBookError,
  bookListCreateBookInProgress,
  bookListCreateBookStart,
  bookListFetchStart,
} from '../reducers/bookList';

function* bookListCreateBookSaga({ payload: { bookData } }) {
  try {
    yield put(bookListCreateBookInProgress());
    yield call(createBook, bookData);
    yield put(bookListFetchStart());
  } catch (error) {
    yield put(bookListCreateBookError());
  }
}

export function* bookListCreateBookWatcher() {
  yield takeLatest(bookListCreateBookStart.type, bookListCreateBookSaga);
}
