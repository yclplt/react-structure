import { createTheme as createMuiTheme } from '@mui/material/styles'
import { base } from './base'
import { light } from './light'
import { dark } from './dark'
import { ThemeMode } from '@/types'

export const createTheme = (mode: ThemeMode) => createMuiTheme(base, mode === 'dark' ? dark : light)
