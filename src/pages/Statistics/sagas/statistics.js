import { put, call, takeLatest } from 'redux-saga/effects';
import { getBookList } from '../../../api/books';
import { STATISTICS_FETCH_START } from '../action-types/statistics';
import {
  statisticsFetchError,
  statisticsFetchInProgress,
  statisticsFetchSuccess,
} from '../actions/statistics';

function* statisticsFetchSaga() {
  try {
    yield put(statisticsFetchInProgress());
    const data = yield call(getBookList);
    yield put(statisticsFetchSuccess(data));
  } catch (error) {
    yield put(statisticsFetchError());
  }
}

export function* statisticsFetchWatcher() {
  yield takeLatest(STATISTICS_FETCH_START, statisticsFetchSaga);
}
