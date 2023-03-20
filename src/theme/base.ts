import { ThemeOptions } from '@mui/material'

export const base: ThemeOptions = {
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 1000,
            lg: 1400,
            xl: 1800,
        },
    },
    direction: 'ltr',
    typography: {
        button: {
            fontWeight: 600,
        },
        fontFamily:
            '"Roboto", sans-serif',
        body1: {
            fontSize: '0.875rem',
            fontWeight: 500,
            lineHeight: 1.5,
        },
        body2: {
            fontSize: '0.75rem',
            fontWeight: 500,
            lineHeight: 1.57,
        },
        subtitle1: {
            fontSize: '0.875rem',
            fontWeight: 600,
            lineHeight: 1.75,
        },
        subtitle2: {
            fontSize: '0.75rem',
            fontWeight: 600,
            lineHeight: 1.57,
        },
        overline: {
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.5px',
            lineHeight: 2.5,
            textTransform: 'none',
        },
        caption: {
            fontSize: '0.75rem',
            fontWeight: 400,
            lineHeight: 1.66,
        },
        h1: {
            fontWeight: 700,
            fontSize: '3.5rem',
            lineHeight: 1.375,
        },
        h2: {
            fontWeight: 700,
            fontSize: '3rem',
            lineHeight: 1.375,
        },
        h3: {
            fontWeight: 700,
            fontSize: '2.25rem',
            lineHeight: 1.375,
        },
        h4: {
            fontWeight: 700,
            fontSize: '2rem',
            lineHeight: 1.375,
        },
        h5: {
            fontWeight: 600,
            fontSize: '1.5rem',
            lineHeight: 1.375,
        },
        h6: {
            fontWeight: 600,
            fontSize: '1.125rem',
            lineHeight: 1.375,
        },
    },
}