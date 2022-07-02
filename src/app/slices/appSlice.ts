import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface AppState {

}

// Define the initial state using that type
const initialState: AppState = {
}

export const appSlice = createSlice({
    name: 'app',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {

        }
    }
)

export const {
} = appSlice.actions

export default appSlice.reducer
