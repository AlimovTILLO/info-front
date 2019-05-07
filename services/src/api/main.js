// import { authHeader } from '../helpers'
import { HTTP } from './common'
export const Main = {
  getAll () {
    // let config = {
    //   headers: authHeader()
    // }
    return HTTP.get('/').then(response => {
      return response.data
    })
  },
  addItem (config) {
    return HTTP.post('/announcement/store/', config).then(response => {
      return response.data
    })
  },
  addService (config) {
    return HTTP.post('/service/store/', config).then(response => {
      return response.data
    })
  }
}
