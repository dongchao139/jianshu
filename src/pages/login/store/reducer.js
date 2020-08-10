

const defaultState = {
  loginStatus: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'doLogin':
      return {
        loginStatus: action.payload
      }
    case 'doLogout':
      return {
        loginStatus: false
      }
    default:
      return state;
  }
}