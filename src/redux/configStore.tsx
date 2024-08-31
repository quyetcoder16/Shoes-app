import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from './ProductReducer/ProductReducer'
export const store = configureStore({
    reducer: {
        ProductReducer
    }
})

export type RootState = ReturnType<typeof store.getState>