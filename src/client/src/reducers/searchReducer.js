export default (state = {}, action) => {
  switch (action.type) {
    case 'SELECTED_TAG':
      console.log(state.tags);
      return {
        ...state
      };
    default:
      return state;
  }
}