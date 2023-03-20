import { configureStore } from "@reduxjs/toolkit";
import { themeSlice } from '@/store'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const store = configureStore({
    reducer: {
        [themeSlice.name]: themeSlice.reducer,
    }
})

export { store }

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector