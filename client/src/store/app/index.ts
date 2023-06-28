import appState from './state'
import appGetters from './getters'
import appActions from './actions'
import { defineStore } from 'pinia'

const AppStore = defineStore('appStore', {
  state: () => appState,
  getters: appGetters,
  actions: appActions
})

export default AppStore
