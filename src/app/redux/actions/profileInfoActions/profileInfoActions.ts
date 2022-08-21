import {
    FetchProfileInfoFailure,
    FetchProfileInfoFailurePayload,
    FetchProfileInfoSuccess,
    FetchProfileInfoSuccessPayload,
    FetchProfileRequest
} from "../../types/profileInfoTypes";
import {ProfileInfoTypes} from "../../actionTypes/profileInfoTypes";

export const fetchProfileInfoRequest = () : FetchProfileRequest => ({
    type: ProfileInfoTypes.FETCH_PROFILE_INFO_REQUEST
});

export const fetchProfileInfoSuccess = (
    payload: FetchProfileInfoSuccessPayload
) : FetchProfileInfoSuccess => ({
    type: ProfileInfoTypes.FETCH_PROFILE_INFO_SUCCESS,
    payload
});

export const fetchProfileInfoFailure = (
    payload: FetchProfileInfoFailurePayload
): FetchProfileInfoFailure => ({
    type: ProfileInfoTypes.FETCH_PROFILE_INFO_FAILURE,
    payload
});