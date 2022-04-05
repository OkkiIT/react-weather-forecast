import { all } from "redux-saga/effects";
import forecastSaga from "./forecast";

export default function* rootSaga() {
  yield all([forecastSaga()]);
}
