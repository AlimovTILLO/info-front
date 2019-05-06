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
      console.log(response)
      return response.data
    })
  }
}
