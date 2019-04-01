export const selectedTags = (tag) => dispatch => {
  console.log({action: tag});
  dispatch({
    type: 'SELECTED_TAG',
    tag: tag
  })
}