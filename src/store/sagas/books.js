import { toast } from 'react-toastify';
import { put, call, takeLatest } from 'redux-saga/effects';
import { getBookItem, getBookList } from '../../api/books';
import {
  BEGIN_LOADING,
  END_LOADING,
  ERROR_RESPONSE,
  GET_BOOK,
  GET_BOOKS,
  GET_BOOKS_SUCCESS,
  GET_BOOK_SUCCESS,
} from '../actions/actionTypes';

function* getBooks() {
  try {
    yield put({ type: BEGIN_LOADING });
    const booksData = yield call(getBookList);
    yield put({ type: GET_BOOKS_SUCCESS, payload: booksData });
    toast.success('Books data have been loaded successfully!');
  } catch (error) {
    yield put({ type: ERROR_RESPONSE, payload: error.message });
    toast.error(error.message);
  } finally {
    yield put({ type: END_LOADING });
  }
}

function* getBook(action) {
  try {
    yield put({ type: BEGIN_LOADING });
    const bookData = yield call(() => getBookItem(action.payload));
    yield put({ type: GET_BOOK_SUCCESS, payload: bookData });
    toast.success('Book data have been loaded successfully!');
  } catch (error) {
    yield put({ type: ERROR_RESPONSE, payload: error.message });
    toast.error(error.message);
  } finally {
    yield put({ type: END_LOADING });
  }
}

function* booksSaga() {
  yield takeLatest(GET_BOOKS, getBooks);
  yield takeLatest(GET_BOOK, getBook);
}

export default booksSaga;
