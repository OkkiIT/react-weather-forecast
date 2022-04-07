import { put, all, takeLatest, call } from "redux-saga/effects";

import { fetchForecast } from "../../services/forecast";
import { fetchForecastFailure, fetchForecastSuccess } from "../actions/forecast";
import { FETCH_FORECAST } from "../actionTypes";

function* fetchForecastt({ payload }) {
  try {
    const data = yield call(fetchForecast, payload.city);
    yield put(fetchForecastSuccess(data));
  } catch (error) {
    yield put(fetchForecastFailure(error.message));
  }
}

export default function* forecastSaga() {
  yield all([takeLatest(FETCH_FORECAST.START, fetchForecastt)]);
}
