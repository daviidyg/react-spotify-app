import {ProfileInfoTypes} from "../actionTypes/profileInfoTypes";

export interface FetchProfileInfoSuccessPayload {
    info: any;
}

export interface FetchProfileInfoFailurePayload {
    error: string;
}

export interface FetchProfileInfoFailurePayload {
    type: typeof ProfileInfoTypes.FETCH_PROFILE_INFO_FAILURE;
}

export type FetchProfileRequest = {
    type: typeof ProfileInfoTypes.FETCH_PROFILE_INFO_REQUEST
}

export type FetchProfileInfoSuccess = {
    type: typeof ProfileInfoTypes.FETCH_PROFILE_INFO_SUCCESS;
    payload: FetchProfileInfoSuccessPayload;
};

export type FetchProfileInfoFailure = {
    type: typeof ProfileInfoTypes.FETCH_PROFILE_INFO_FAILURE;
    payload: FetchProfileInfoFailurePayload;
};

export type profileInfoActions =  FetchProfileRequest | FetchProfileInfoSuccess | FetchProfileInfoFailure;