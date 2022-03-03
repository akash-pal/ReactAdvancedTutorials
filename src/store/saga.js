import { takeLatest, put, delay } from "redux-saga/effects";
import * as actionCreators from "./actions/actions";

function* asyncIncrement(action) {
  yield put(actionCreators.loading(true));
  yield delay(5000);
  yield put({ type: "INCREMENT", payload: action.payload });
}

export function* watchIncrement() {
  yield takeLatest("INCREMENT_SAGA", asyncIncrement);
}
