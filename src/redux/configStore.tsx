import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from './ProductReducer/ProductReducer'
import userReducer from './UserReducer/userReducer'
import loadingReducer from './LoadingReducer/loadingReducer'
export const store = configureStore({
    reducer: {
        ProductReducer,
        userReducer,
        loadingReducer
    }
})

export type DispatchType = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>