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
  getServiceByCatId (id) {
    return HTTP.get(`/service/${id}/category`).then(response => {
      return response.data
    })
  },
  getActiveServiceByUserId (id) {
    return HTTP.get(`/service/${id}/user/active`).then(response => {
      return response.data
    })
  },
  getInactiveServiceByUserId (id) {
    return HTTP.get(`/service/${id}/user/inactive`).then(response => {
      return response.data
    })
  },
  getAwaitingServiceByUserId (id) {
    return HTTP.get(`/service/${id}/user/awaiting`).then(response => {
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
    return HTTP.get(`/announcement/${id}/user/close`).then(response => {
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
