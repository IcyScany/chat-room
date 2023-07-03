export interface AppState {
  user: User;
}

const appState: AppState = {
  user: {
    userId: '',
    username: '',
    password: '',
    createTime: 0
  }
}

export default appState
