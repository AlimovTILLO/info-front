import { HTTP } from './common'
export const Main = {
  create (config) {
    return HTTP.post('/notes/', config).then(response => {
      return response.data
    })
  },
  delete (note) {
    return HTTP.delete(`/notes/${note.id}/`)
  },
  base_data () {
    return HTTP.get('/ru/').then(response => {
      return response.data
    })
  }
}
