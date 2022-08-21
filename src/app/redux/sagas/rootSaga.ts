import { all, fork } from "redux-saga/effects";
import profileSaga from "./profileInfoSaga";

export function* rootSaga() {
    yield all([fork(profileSaga)]);
}
