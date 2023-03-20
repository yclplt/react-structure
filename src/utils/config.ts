
import { createUnknownSnackbar } from '@/utils'
import { QueryClientConfig } from 'react-query'

export const apiUrl = 'http://localhost:1337/api'

export const queryClientConfig: QueryClientConfig = {
    defaultOptions: {
        queries: {
            retry: 0,
            // refetchOnMount: false,
            // refetchOnWindowFocus: false,

            staleTime: 1000 * 60 * 60,
            onError: (err) => createUnknownSnackbar(err),
        },
        mutations: {
            onError: (err) => createUnknownSnackbar(err),
        },
    },
}