import axios, { AxiosInstance } from 'axios'

export const baseURL = '//127.0.0.1:3000'

const fetch: AxiosInstance = axios.create({
  timeout: 60000,
  baseURL: baseURL,
  headers: {
    'Cache-Control': 'no-cache',
    Param: 'no-cache'
  }
})

export default fetch
