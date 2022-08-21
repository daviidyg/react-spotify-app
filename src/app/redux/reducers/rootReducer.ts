import { combineReducers } from "redux";
import profileInfoReducer from "./profileInfoReducer";

const rootReducer = combineReducers({
    info: profileInfoReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
