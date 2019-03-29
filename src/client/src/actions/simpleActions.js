export const simpleAction = (str) => dispatch => {
  dispatch({
    type: 'SIMPLE_ACTION',
    payload: str
  });
}

export const deleteInfo = () => dispatch => {
  dispatch({
    type: 'DELETE_INFO'
  });
}

export const displayInfo = (info) => dispatch => {
  dispatch({
    type: 'DISPLAY_INFO',
    info: info
  });
}

export const isLogged = () => dispatch => {
  dispatch({
    type: 'USER_LOGIN_STATE'
  });
}

export const logout = () => dispatch => {
  dispatch({
    type: 'LOGOUT'
  });
}