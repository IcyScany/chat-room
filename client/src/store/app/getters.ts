import { AppState } from './state'
import Cookies from 'js-cookie'

const appGetters = {
  get_user(state: AppState) {
    const user = Cookies.get('user')
    if (!user) return {}
    state.user = JSON.parse(user)
    return state.user
  }
}

export default appGetters
