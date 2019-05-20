import { HTTP } from './common'
export const User = {
  async getUser (id) {
    const response = await HTTP.get(`/user/${id}/profile/`)
    return response.data
  },
  confirmEmail (code) {
    return HTTP.get(`/auth/confirm/${code}`).then(response => {
      return response.data
    })
  },
  login (email, password) {
    let config = { email: email, password: password }
    return HTTP.post('/auth/login/', config)
      .then(handleResponse)
      .then(response => {
        if (response.data.api_token) {
          localStorage.setItem('user', JSON.stringify(response.data))
        }
        return response.data
      })
  },
  logout () {
    // remove user from local storage to log user out
    localStorage.removeItem('user')
  },
  updateProfile (config, id) {
    return HTTP.post(`/user/${id}/profile/update/`, config).then(response => {
      return response.data
    })
  },
  register (config) {
    return HTTP.post('/auth/register/', config).then(response => {
      return response.data
    })
  }
}

function handleResponse (response) {
  const data = response.data
  if (data.errors === true) {
    if (response.status === 401) {
      User.logout()
      location.reload(true)
    }
    const error = (data && data.message) || response.statusText
    return Promise.reject(error)
  } else {
    return response.data
  }
}
