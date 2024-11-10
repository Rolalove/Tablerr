import { call, put, takeLatest } from "redux-saga/effects";
import { signUp, logIn, logOut } from "../../api/firebaseAuth";
import {
  signupRequest,
  signupSuccess,
  signupFailure,
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
} from "../reducers/authSlice";

function* signupSaga(action) {
  try {
    const { email, password, fullName } = action.payload;
    const user = yield call(signUp, email, password, fullName);
    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    };

    yield put(signupSuccess(userData));
    yield put({ type: "REDIRECT", payload: "/login" });
  } catch (error) {
    yield put(signupFailure(error.message));
  }
}

function* loginSaga(action) {
  try {
    const { email, password } = action.payload;
    const user = yield call(logIn, email, password);
    const userData = {
      uid: user.uid,
      email: user.email,
    };

    yield put(loginSuccess(userData));
    yield put({ type: "REDIRECT", payload: "/dashboard" });
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

function* logoutSaga() {
  try {
    yield call(logOut);
    yield put(logout());
  } catch (error) {
    console.error(error);
  }
}

export default function* authWatcher() {
  yield takeLatest(signupRequest.type, signupSaga);
  yield takeLatest(loginRequest.type, loginSaga);
  yield takeLatest(logout.type, logoutSaga);
}
