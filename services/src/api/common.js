import axios from 'axios'
export const HTTP = axios.create({
  baseURL: 'http://ishu.info/api/v1/'
})
