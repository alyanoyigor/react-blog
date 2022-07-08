import { all, fork } from "redux-saga/effects";

import * as bookItemSagas from "../../pages/BookItem/sagas";

const combinedSagas = {
  ...bookItemSagas,
};

export default function* rootSaga() {
  yield all(Object.values(combinedSagas).map((saga) => fork(saga)));
}
