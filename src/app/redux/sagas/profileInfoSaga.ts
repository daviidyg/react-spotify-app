import axios, {AxiosResponse} from "axios";
import {all, call, put, takeEvery} from "redux-saga/effects";
import {ProfileInfoTypes} from "../actionTypes/profileInfoTypes";
import {fetchProfileInfoFailure, fetchProfileInfoSuccess} from "../actions/profileInfoActions/profileInfoActions";
import {ProfileInfo} from "../../models/ProfileInfo";
import {AppRoutes, token} from "../../app-constants";

const getInfoAccount = () => axios.get<ProfileInfo>("https://api.spotify.com/v1/me",
    {
        headers: {
            "Authorization": `${token}`,
            "Content-type": "application/json",
            "Accept": "application/json"
        }
    });

function* fetchProfileInfo() {
    try {
        const res: AxiosResponse<ProfileInfo> = yield call(getInfoAccount);
        yield put(
            fetchProfileInfoSuccess({
                info: res.data
            })
        );
    } catch (e) {
        if(e.code === "ERR_BAD_REQUEST") {
            localStorage.removeItem("token");
            window.location.replace(AppRoutes.LOGIN);
        } else {
            yield put(
                fetchProfileInfoFailure({
                    error: e.message
                })
            )
        }
    }
}

function* profileSaga() {
    yield all([takeEvery(ProfileInfoTypes.FETCH_PROFILE_INFO_REQUEST, fetchProfileInfo)]);
}

export default profileSaga;