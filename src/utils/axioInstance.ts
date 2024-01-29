import axios from 'axios'

const axiosIntance = axios.create({
  baseURL: process.env.BACKEND_API_URL
})

const gamesApi = axios.create({
  baseURL: process.env.RAWG_API_URL,
  params: {
    key: process.env.RAWG_API_KEY
  }
})

export default axiosIntance
export { gamesApi }
