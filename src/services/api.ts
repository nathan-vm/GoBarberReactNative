import axios from 'axios'

const api = axios.create({
  baseURL: 'https://gobarberapi.nathanvm.com.br',
})

export default api
