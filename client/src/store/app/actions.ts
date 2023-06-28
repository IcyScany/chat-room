import Cookies from 'js-cookie'
import appState from './state'

const appActions = {
  set_user: (payload: User) => {
    appState.user = payload
    Cookies.set('user', JSON.stringify(payload), { expires: 30 })
  }
}

export default appActions