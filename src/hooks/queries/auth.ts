import services from '@/services'
import { useMutation, useQueryClient } from 'react-query'

export const useAuthLoginMutation = () => {
    const queryClient = useQueryClient()
    return useMutation(services.auth.login, {
        onSuccess: (data) => {
            if (data.jwt) {
                localStorage.setItem('token', data.jwt)
                queryClient.setQueryData(['auth'], data)
            }
        },
    })
}