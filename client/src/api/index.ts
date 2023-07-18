import fetch from './fetch'

export const register = async(user: User) => {
  await fetch.post('/auth/register', {
    user
  })
}

export const login = async(user: User) => {
  await fetch.post('/auth/login', {
    user
  })
}
