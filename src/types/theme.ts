import { Color } from '@mui/material'

export type ThemeMode = 'light' | 'dark'

declare module '@mui/material/styles/createPalette' {
    interface Palette {
        neutral: Partial<Color>
    }

    interface PaletteOptions {
        neutral?: Partial<Color>
    }
}
