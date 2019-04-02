export const selectedTags = (tag) => dispatch => {
  dispatch({
    type: 'SELECTED_TAG',
    tag: tag
  });
}

export const deselectTag = (tag) => dispatch => {
  dispatch({
    type: 'DESELECT_TAG',
    tag: tag
  });
}

export const selectedAgeRange = (minAge, maxAge) => dispatch => {
  dispatch({
    type: 'AGE_RANGE',
    minAge: minAge,
    maxAge: maxAge
  });
}

export const selectedScoreRange = (minScore, maxScore) => dispatch => {
  dispatch({
    type: 'SCORE_RANGE',
    minScore: minScore,
    maxScore: maxScore
  });
}

export const selectedLocalisationRange = (minLocalisation, maxLocalisation) => dispatch => {
  dispatch({
    type: 'LOCALISATION_RANGE',
    minLocalisation: minLocalisation,
    maxLocalisation: maxLocalisation
  });
}