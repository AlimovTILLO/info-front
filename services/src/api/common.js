import axios from 'axios'
export const HTTP = axios.create({
  baseURL: 'http://www.ishu.info/api/v1/'
})
