
import { enqueueSnackbar } from 'notistack'
import { ApiError } from '@/utils'


export const createUnknownSnackbar = (err: unknown) => {
    if (err instanceof ApiError) {
        enqueueSnackbar(err.message, { variant: 'error' })
    } else {
        enqueueSnackbar('Error Request', { variant: 'error' })
    }
}