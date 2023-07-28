import Cookies from 'js-cookie'
import appState from './state'

const appActions = {
  setUser: (payload: User) => {
    appState.user = payload
    Cookies.set('user', JSON.stringify(payload), { expires: 30 })
  },

  setToken: (payload: string) => {
    appState.token = payload
    Cookies.set('token', payload, { expires: 3 })
  }
}

export default appActions