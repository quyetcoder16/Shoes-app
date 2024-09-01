import { createSlice } from '@reduxjs/toolkit'

export type LoadingStateModel = {
    isLoading: boolean
}

const initialState: LoadingStateModel = {
    isLoading: false,
}

const loadingReducer = createSlice({
    name: "loadingReducer",
    initialState,
    reducers: {
        displayLoadingAction: (state) => {
            state.isLoading = true
        },
        hideLoadingAction: (state) => {
            state.isLoading = false
        }

    }
});

export const { displayLoadingAction, hideLoadingAction } = loadingReducer.actions

export default loadingReducer.reducer