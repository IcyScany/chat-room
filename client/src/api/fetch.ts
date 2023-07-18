import axios, { AxiosInstance } from 'axios'
import { AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import cookie from 'js-cookie'

export const baseURL = '//127.0.0.1:3000'

const fetch: AxiosInstance = axios.create({
  timeout: 60000,
  baseURL: baseURL,
  headers: {
    'Cache-Control': 'no-cache',
    Param: 'no-cache'
  }
})

// 请求拦截器
const requestSuccess = (request: InternalAxiosRequestConfig<any>) => {
  const token = cookie.get('token')
  request.headers.token = token
  return request
}

const requestFail = (error: InternalAxiosRequestConfig) => {
  return Promise.reject(error)
}

// 接收拦截器
const responseSuccess = (response: AxiosResponse) => {
  return response
}

const responseFail = (error: AxiosResponse) => {
  return Promise.reject(error)
}

fetch.interceptors.request.use(requestSuccess, requestFail)
fetch.interceptors.response.use(responseSuccess, responseFail)

export default fetch
