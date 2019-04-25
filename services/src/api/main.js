import { HTTP } from './common'
export const Main = {
  base_data () {
    return HTTP.get('/ru/').then(response => {
      return response.data
    })
  }
}
