// import { authHeader } from '../helpers'
import { HTTP } from './common'
export const Main = {
  getMain () {
    // let config = {
    //   headers: authHeader()
    // }
    return HTTP.get('/main').then(response => {
      return response.data
    })
  },
  getAll () {
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
  },
  getServiceById (id) {
    return HTTP.get(`/service/${id}/`).then(response => {
      return response.data
    })
  },
  getAdsByUserId (id, page) {
    console.log(id, page)
    return HTTP.get(`/ads/${id}/user?page=${page}`).then(response => {
      return response.data
    })
  },
  getServiceByCatId (id) {
    return HTTP.get(`/service/${id}/category`).then(response => {
      return response.data
    })
  },
  getActiveServiceByUserId (id, page) {
    return HTTP.get(`/service/${id}/user/active?page=${page}`).then(response => {
      return response.data
    })
  },
  getInactiveServiceByUserId (id, page) {
    return HTTP.get(`/service/${id}/user/inactive?page=${page}`).then(response => {
      return response.data
    })
  },
  getAwaitingServiceByUserId (id, page) {
    return HTTP.get(`/service/${id}/user/awaiting?page=${page}`).then(response => {
      return response.data
    })
  },
  getActiveAdsByUserId (id) {
    return HTTP.get(`/announcement/${id}/user/active`).then(response => {
      return response.data
    })
  },
  getAwaitingAdsByUserId (id) {
    return HTTP.get(`/announcement/${id}/user/awaiting`).then(response => {
      return response.data
    })
  },
  getCloseAdsByUserId (id) {
    return HTTP.get(`/announcement/${id}/user/closed`).then(response => {
      return response.data
    })
  },
  getRejectedAdsByUserId (id) {
    return HTTP.get(`/announcement/${id}/user/rejected`).then(response => {
      return response.data
    })
  },
  deleteItem (id) {
    return HTTP.get(`/announcement/${id}/delete`).then(response => {
      return response.data
    })
  },
  deleteService (id) {
    return HTTP.get(`/service/${id}/delete`).then(response => {
      return response.data
    })
  },
  playPauseService (id) {
    return HTTP.get(`/service/${id}/stop`).then(response => {
      return response.data
    })
  }
}
