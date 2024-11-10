import { all } from "redux-saga/effects";
import simulateRealTimeData from "./dashboardSaga";
import authWatcher from "./authSaga";

export default function* rootSaga() {
  yield all([simulateRealTimeData(), authWatcher()]);
}
