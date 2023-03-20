import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ThemeMode } from "@/types"

export interface ThemeState {
  colorScheme: ThemeMode
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    colorScheme: 'light',
  } as ThemeState,
  reducers: {
    changeColorScheme(state, action: PayloadAction<ThemeMode>) {
      state.colorScheme = action.payload
    },
  },
})

export const themeActions = themeSlice.actions