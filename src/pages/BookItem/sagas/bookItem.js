import { put, call, takeLatest } from "redux-saga/effects";
import { getBookItem } from "../../../api/books";
import { BOOK_ITEM_FETCH_START } from "../action-types/bookItem";
import {
  bookItemFetchError,
  bookItemFetchInProgress,
  bookItemFetchSuccess,
} from "../actions/bookItem";

function* bookFetchSaga({ payload: { id } }) {
  try {
    yield put(bookItemFetchInProgress());
    const data = yield call(getBookItem, id);
    yield put(bookItemFetchSuccess(data));
  } catch (error) {
    yield put(bookItemFetchError());
  }
}

export function* bookFetchWatcher() {
  yield takeLatest(BOOK_ITEM_FETCH_START, bookFetchSaga);
}
