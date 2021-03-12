const initialValue = {
  isLogin: false,
  token: '',
}

const userReducers = (state = initialValue, action: any): any => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        ...action.payload,
      }
    case 'SET_LOGIN_STATUS':
      return {
        ...state,
        isLogin: action.payload,
      }
    default:
      return state
  }
}
export default userReducers
