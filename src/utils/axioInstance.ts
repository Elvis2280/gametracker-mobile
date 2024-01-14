import axios from 'axios'

const axiosIntance = axios.create({
  baseURL: 'http://localhost:8080'
})

export default axiosIntance
