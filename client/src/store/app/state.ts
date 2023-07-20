export interface AppState {
  user: User;
  token: string;
}

const appState: AppState = {
  user: {
    userId: '',
    username: '',
    password: '',
    createTime: 0
  },
  token: ''
}

export default appState
