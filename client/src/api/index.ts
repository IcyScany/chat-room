import fetch from './fetch'

export const register = async(user: User) => {
  return await fetch.post('/auth/register', { user })
}

export const login = async(user: User) => {
  return await fetch.post('/auth/login', { user })
}
