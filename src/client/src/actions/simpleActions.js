export const simpleAction = (str) => dispatch => {
  dispatch({
    type: 'SIMPLE_ACTION',
    payload: str
  })
}

export const deleteInfo = () => dispatch => {
  dispatch({
    type: 'DELETE_INFO'
  })
}

export const displayInfo = (info) => dispatch => {
  dispatch({
    type: 'DISPLAY_INFO',
    info: info
  })
}

export const isLogged = (bool) => dispatch => {
  dispatch({
    type: 'USER_LOGIN_STATE',
    isLogin: bool
  })
}