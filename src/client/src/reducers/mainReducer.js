export default (state = {}, action) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        ...state,
        result: action.payload
      };
    case 'DELETE_INFO':
      return {
        ...state,
        info: ''
      };
    case 'DISPLAY_INFO':
      return {
        ...state,
        info: action.info
      }
    case 'USER_LOGIN_STATE':
      return {
        ...state,
        isLogin: true,
        logout: false
      }
    case 'LOGOUT':
      return {
        ...state,
        isLogin: false,
        logout: true
      }
    default:
      return state;
  }
}