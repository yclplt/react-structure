import axios, { AxiosRequestTransformer } from 'axios'
import { apiUrl } from '@/utils'

export class ApiError {
    message: string
    code: number

    constructor(message: string, code: number) {
        this.message = message
        this.code = code
    }
}

const dateTransformer: AxiosRequestTransformer = (data) => {
    return data
}

export const api = axios.create({
    baseURL: apiUrl,
    transformRequest: [dateTransformer].concat(axios.defaults.transformRequest ?? []),
})

api.interceptors.request.use((config: any) => {
    const settings = JSON.parse(localStorage.getItem('settings') || '{}')
    const token = localStorage.getItem('token')
    if (settings.languageCode) {
        config.headers['X-Language'] = settings.languageCode
    }
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }

    config.headers['X-Channel'] = 'web'

    return config
})


api.interceptors.response.use(
    (response: any) => response,
    (error: any) => {
        const apiError = new ApiError('Unknown Api Error', 400)

        if (error.response) {
            apiError.message = error.response.data.message
            apiError.code = error.response.status
        }
        return Promise.reject(apiError)
    }
)
