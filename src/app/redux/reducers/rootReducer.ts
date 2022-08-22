import { combineReducers } from "redux";
import profileInfoReducer from "./profileInfoReducer";

const rootReducer = combineReducers({
    profileInfo: profileInfoReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
