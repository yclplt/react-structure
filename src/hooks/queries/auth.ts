import services from '@/services'
import { useMutation, useQueryClient } from 'react-query'
import { useSnackbar } from 'notistack'

export const useAuthLoginMutation = () => {
    const queryClient = useQueryClient()
    const snackbar = useSnackbar()
    return useMutation(services.auth.login, {
        onSuccess: (data) => {
            if (data.isEmailVerified) {
                data.token && localStorage.setItem('token', data.token)
                queryClient.setQueryData(['auth'], data)
                snackbar.enqueueSnackbar('Login successful.', { variant: 'success' })
            } else {
                snackbar.enqueueSnackbar('Enter the code sent to your e-mail.', {
                    variant: 'info',
                })
            }
        },
    })
}