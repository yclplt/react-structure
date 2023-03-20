import { ThemeOptions, Color, PaletteColorOptions, TypeText, TypeBackground } from '@mui/material'

const neutral: Partial<Color> = {
    '100': '#F3F4F6',
    '200': '#E5E7EB',
    '300': '#D1D5DB',
    '400': '#9CA3AF',
    '500': '#6B7280',
    '600': '#4B5563',
    '700': '#374151',
    '800': '#1F2937',
    '900': '#111827',
}

const background: Partial<TypeBackground> = {
    default: '#0B0F19',
    paper: neutral[900],
}

const divider = '#2D3748'

const primary: PaletteColorOptions = {
    main: '#1DA1F2',
    light: '#65BEF6',
    dark: '#0D94E7',
    contrastText: '#FFFFFF',
}

const secondary: PaletteColorOptions = {
    main: '#10B981',
    light: '#3FC79A',
    dark: '#0B815A',
    contrastText: '#FFFFFF',
}

const success: PaletteColorOptions = {
    main: '#14B8A6',
    light: '#43C6B7',
    dark: '#0E8074',
    contrastText: '#FFFFFF',
}

const info: PaletteColorOptions = {
    main: '#2196F3',
    light: '#64B6F7',
    dark: '#0B79D0',
    contrastText: '#FFFFFF',
}

const warning: PaletteColorOptions = {
    main: '#FFB020',
    light: '#FFBF4C',
    dark: '#B27B16',
    contrastText: '#FFFFFF',
}

const error: PaletteColorOptions = {
    main: '#D14343',
    light: '#DA6868',
    dark: '#922E2E',
    contrastText: '#FFFFFF',
}

const text: Partial<TypeText> = {
    primary: '#EDF2F7',
    secondary: '#A0AEC0',
    disabled: 'rgba(255, 255, 255, 0.48)',
}

export const dark: ThemeOptions = {
    components: {
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    backgroundColor: primary.main,
                    color: primary.contrastText,
                },
            },
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    backgroundColor: neutral[500],
                    color: '#FFFFFF',
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    '&.MuiChip-filledDefault': {
                        backgroundColor: neutral[800],
                        '& .MuiChip-deleteIcon': {
                            color: neutral[500],
                        },
                    },
                    '&.MuiChip-outlinedDefault': {
                        borderColor: neutral[700],
                        '& .MuiChip-deleteIcon': {
                            color: neutral[700],
                        },
                    },
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    '&::placeholder': {
                        opacity: 1,
                        color: text.secondary,
                    },
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    borderColor: divider,
                },
            },
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    borderColor: divider,
                    borderStyle: 'solid',
                    borderWidth: 1,
                },
            },
        },
        MuiPopover: {
            styleOverrides: {
                paper: {
                    borderColor: divider,
                    borderStyle: 'solid',
                    borderWidth: 1,
                },
            },
        },
        MuiSwitch: {
            styleOverrides: {
                switchBase: {
                    color: neutral[700],
                },
                track: {
                    backgroundColor: neutral[500],
                    opacity: 1,
                },
            },
        },
    },
    palette: {
        action: {
            active: neutral[400],
            hover: 'rgba(255, 255, 255, 0.04)',
            selected: 'rgba(255, 255, 255, 0.08)',
            disabledBackground: 'rgba(255, 255, 255, 0.12)',
            disabled: 'rgba(255, 255, 255, 0.26)',
        },
        background,
        divider,
        error,
        info,
        mode: 'dark',
        neutral,
        primary,
        secondary,
        success,
        text,
        warning,
    },
    shadows: [
        'none',
        '0px 1px 2px rgba(0, 0, 0, 0.24)',
        '0px 1px 2px rgba(0, 0, 0, 0.24)',
        '0px 1px 4px rgba(0, 0, 0, 0.24)',
        '0px 1px 5px rgba(0, 0, 0, 0.24)',
        '0px 1px 6px rgba(0, 0, 0, 0.24)',
        '0px 2px 6px rgba(0, 0, 0, 0.24)',
        '0px 3px 6px rgba(0, 0, 0, 0.24)',
        '0px 4px 6px rgba(0, 0, 0, 0.24)',
        '0px 5px 12px rgba(0, 0, 0, 0.24)',
        '0px 5px 14px rgba(0, 0, 0, 0.24)',
        '0px 5px 15px rgba(0, 0, 0, 0.24)',
        '0px 6px 15px rgba(0, 0, 0, 0.24)',
        '0px 7px 15px rgba(0, 0, 0, 0.24)',
        '0px 8px 15px rgba(0, 0, 0, 0.24)',
        '0px 9px 15px rgba(0, 0, 0, 0.24)',
        '0px 10px 15px rgba(0, 0, 0, 0.24)',
        '0px 12px 22px -8px rgba(0, 0, 0, 0.24)',
        '0px 13px 22px -8px rgba(0, 0, 0, 0.24)',
        '0px 14px 24px -8px rgba(0, 0, 0, 0.24)',
        '0px 20px 25px rgba(0, 0, 0, 0.24)',
        '0px 25px 50px rgba(0, 0, 0, 0.24)',
        '0px 25px 50px rgba(0, 0, 0, 0.24)',
        '0px 25px 50px rgba(0, 0, 0, 0.24)',
        '0px 25px 50px rgba(0, 0, 0, 0.24)',
    ],
}
