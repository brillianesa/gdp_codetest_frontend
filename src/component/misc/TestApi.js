import axios from 'axios'
import { parseJwt } from './Helpers'

export const TestApi = {
  authenticate,
  getTest,
  getUserMe
}

function authenticate(email, password) {
  return instance.post('api/account/login', { email, password }, {
    headers: { 'Content-type': 'application/json' }
  })
}

function getTest(user, user_id) {
  const url = user_id ? `/api/score/account/${user_id}` : '/api/score/account'
  return instance.get(url, {
    headers: { 'Authorization': bearerAuth(user) }
  })
}

function getUserMe(user) {
  return instance.get('/api/user/me', {
    headers: { 'Authorization': bearerAuth(user) }
  })
}

// -- Axios

const instance = axios.create({
  baseURL: 'http://localhost:8089'
})


instance.interceptors.request.use(function (config) {
    // If token is expired, redirect user to login
    if (config.headers.Authorization) {
      const token = config.headers.Authorization.split(' ')[1]
      const data = parseJwt(token)
      if (Date.now() > data.exp * 1000) {
        window.location.href = "/login"
      }
    }
    return config
  }, function (error) {
    return Promise.reject(error)
  })
  
  // -- Helper functions
  
  function bearerAuth(user) {
    return `Bearer ${user.accessToken}`
  }