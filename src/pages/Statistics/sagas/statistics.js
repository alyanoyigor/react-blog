// import { put, call, takeLatest } from 'redux-saga/effects';
// import { getBookList } from '../../../api/books';
// import {
//   statisticsFetchError,
//   statisticsFetchInProgress,
//   statisticsFetchStart,
//   statisticsFetchSuccess,
// } from '../reducers/statistics';

// function* statisticsFetchSaga() {
//   try {
//     yield put(statisticsFetchInProgress());
//     const data = yield call(getBookList);
//     yield put(statisticsFetchSuccess({ data }));
//   } catch (error) {
//     yield put(statisticsFetchError());
//   }
// }

// export function* statisticsFetchWatcher() {
//   yield takeLatest(statisticsFetchStart.type, statisticsFetchSaga);
// }
