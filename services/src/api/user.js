import { HTTP } from './common'
export const User = {
  login (email, password) {
    let config = {email: email, password: password}
    return HTTP.post('/auth/login/', config)
      .then(handleResponse)
      .then(response => {
        if (response.data.api_token) {
          localStorage.setItem('user', JSON.stringify(response.data))
        }
        return response.data
      })
  },
  register (config) {
    return HTTP.post('/auth/register/', config).then(response => {
      return response.data
    })
  }
}

function logout () {
  localStorage.removeItem('user')
}

function handleResponse (response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text)
    if (!response.ok) {
      if (response.status === 401) {
        logout()
        location.reload(true)
      }

      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }
    return data
  })
}
