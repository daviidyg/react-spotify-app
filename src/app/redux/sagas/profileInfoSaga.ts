import axios from "axios";
import {all, put, takeEvery} from "redux-saga/effects";
import {ProfileInfoTypes} from "../actionTypes/profileInfoTypes";
import {fetchProfileInfoFailure, fetchProfileInfoSuccess} from "../actions/profileInfoActions/profileInfoActions";
import {ProfileInfo} from "../../models/ProfileInfo";

const getInfoAccount = () => axios.get<ProfileInfo>("https://api.spotify.com/v1/me");

function* fetchProfileInfo() {
    try {
        // @ts-ignore
        const res = yield call(getInfoAccount);
        yield put(
                fetchProfileInfoSuccess({
                info: res.data
            })
        );
    } catch (e) {

    }
}

function* profileSaga() {
    yield all([takeEvery(ProfileInfoTypes.FETCH_PROFILE_INFO_REQUEST, fetchProfileInfo)]);
}

export default profileSaga;