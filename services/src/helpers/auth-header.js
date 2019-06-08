export function authHeader () {
  // return authorization header with jwt token
  let user = JSON.parse(localStorage.getItem('user'))

  if (user && user.api_token) {
    return { 'Authorization': user.api_token }
  } else {
    return {}
  }
}
