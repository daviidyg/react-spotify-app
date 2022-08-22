import {profileInfoActions} from "../types/profileInfoTypes";
import {ProfileInfoTypes} from "../actionTypes/profileInfoTypes";
import {RootState} from "./rootReducer";

const initialState = {
    pending: false,
    info: {},
    error: null
};

export default (state = initialState, action: profileInfoActions) => {
    switch (action.type) {
        case ProfileInfoTypes.FETCH_PROFILE_INFO_REQUEST:
            return {
                ...state,
                pending: true
            };
        case ProfileInfoTypes.FETCH_PROFILE_INFO_SUCCESS:
            return {
                ...state,
                pending: false,
                info: action.payload.info,
                error: null
            };
        case ProfileInfoTypes.FETCH_PROFILE_INFO_FAILURE:
            return {
                ...state,
                pending: false,
                info: {},
                error: action.payload.error
            };
        default:
            return {
                ...state
            };
    }
};

export const infoSelector = (state: RootState) => state.profileInfo['info'];