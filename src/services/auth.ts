import { api } from '@/utils'

export const login = async ({ email, password }) => {
    const { data } = await api.post('/auth/local', { identifier: email, password })
    return data
}