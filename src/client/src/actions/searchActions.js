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

export const searchSubmit = (submitData) => dispatch => {
  dispatch({
    type: 'SEARCH_SUBMIT',
    data: submitData
  })
}

export const selectedFilter = (filter, order) => dispatch => {
  let ageFilter, scoreFilter, localisationFilter, tagsFilter;
  ageFilter = scoreFilter = localisationFilter = tagsFilter = 'none';
  switch (filter) {
    case 'age':
      ageFilter = order;
    break;
    case 'score':
      scoreFilter = order;
    break;
    case 'localisation':
      localisationFilter = order;
    break;
    case 'tags':
      tagsFilter = order;
    break;
    default:
      break;
  }
  dispatch({
    type: 'FILTER',
    ageFilter: ageFilter,
    scoreFilter: scoreFilter,
    localisationFilter: localisationFilter,
    tagsFilter: tagsFilter
  });
}