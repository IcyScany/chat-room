import AppStore from './app'

const createStore = () => {
  return {
    app: AppStore()
  }
}

export default createStore
