// import { authHeader } from '../helpers'
import { HTTP } from './common'
export const Main = {
  getAll () {
    // let config = {
    //   headers: authHeader()
    // }
    return HTTP.get('/ru/').then(response => {
      return response.data
    })
  }
}
