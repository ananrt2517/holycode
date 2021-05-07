import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchCatsFailure, fetchCatsSuccess } from "../actions/actions";
import * as actionTypes from "../actions/types";
import { getCats } from "../api/api";

interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

function* fetchCatsSaga() {
  try {
    const response: ResponseGenerator = yield call(getCats);
    yield put(
      fetchCatsSuccess({
        payload: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchCatsFailure({
        error: e.message,
      })
    );
  }
}

function* catsSaga() {
  yield all([takeLatest(actionTypes.REQUEST_CATS, fetchCatsSaga)]);
}

export default catsSaga;
