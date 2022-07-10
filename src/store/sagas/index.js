import { all, fork } from 'redux-saga/effects';

import * as bookItemSagas from '../../pages/BookItem/sagas';
import * as bookListSagas from '../../pages/BookList/sagas';
import * as statisticsSagas from '../../pages/Statistics/sagas';

const combinedSagas = {
  ...bookItemSagas,
  ...bookListSagas,
  ...statisticsSagas,
};

export default function* rootSaga() {
  yield all(Object.values(combinedSagas).map((saga) => fork(saga)));
}
