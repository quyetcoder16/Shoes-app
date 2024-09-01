import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from './ProductReducer/ProductReducer'
export const store = configureStore({
    reducer: {
        ProductReducer
    }
})

export type DispatchType = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>