import { toast } from 'react-toastify';
import { put, call, takeLatest } from 'redux-saga/effects';
import { createBook } from '../../../api/books';
import { modalToggleOpen } from '../../../components/Modal/reducers/modal';
import {
  bookListCreateBookError,
  bookListCreateBookInProgress,
  bookListCreateBookStart,
  bookListCreateBookSuccess,
} from '../reducers/bookListCreateBook';
import { bookListFetchSaga } from './bookListFetch';

function* bookListCreateBookSaga({ payload: { bookData } }) {
  try {
    yield put(bookListCreateBookInProgress());
    yield new Promise((resolve) => setTimeout(resolve, 2000));
    yield call(createBook, bookData);
    yield call(bookListFetchSaga);
    yield put(modalToggleOpen());
    toast.success('Book has been created successfully!');
    yield put(bookListCreateBookSuccess({ data: bookData }));
  } catch (error) {
    yield put(bookListCreateBookError());
    toast.error(error._message);
  }
}

export function* bookListCreateBookWatcher() {
  yield takeLatest(bookListCreateBookStart.type, bookListCreateBookSaga);
}
