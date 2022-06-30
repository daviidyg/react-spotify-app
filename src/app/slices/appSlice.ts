import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface AppState {
    tokenUser: string | undefined | null
}

// Define the initial state using that type
const initialState: AppState = {
    tokenUser: "",
}

export const appSlice = createSlice({
    name: 'app',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
            setTokenUser: (state, action: PayloadAction<string> ) => {
                state.tokenUser = action.payload;
            }
        }
    }
)

export const {
    setTokenUser,
} = appSlice.actions

export const getTokenSelector = (state: RootState) => state.app.tokenUser;

export default appSlice.reducer
