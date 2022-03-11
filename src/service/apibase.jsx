import axios from 'axios'
import configs from '../config'

const data = localStorage.getItem('token')
  ? JSON.parse(localStorage.getItem('token'))
  : ''
const token = data?.token

const axiosInstance = axios.create({
  baseURL: configs.apiEndPoint,
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
axiosInstance.interceptors.response.use(
  (response) => {
    console.log(response)
    return response.data
  },
  (error) => {
    if (!error.response) return Promise.reject(error.response.data)
  },
)

export default axiosInstance
