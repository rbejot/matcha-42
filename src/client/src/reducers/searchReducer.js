const initialState = {
  tags: [],
  minAge: 18,
  maxAge: 80,
  minScore: 0,
  maxScore: 100,
  minLocalisation: 0,
  maxLocalisation: 600,
  ageFilter: 'none',
  scoreFilter: 'none',
  localisationFilter: 'none',
  tagsFilter: 'none',
  searchResult: false
}

export default (state = initialState, action) => {
  console.log({type: action.type, action: action});
  switch (action.type) {
    case 'SELECTED_TAG':
      return {
        ...state,
        tags: [...state.tags, action.tag]
      };
    case 'DESELECT_TAG':
      const newTags = [...state.tags];
      newTags.splice(newTags.indexOf(action.tag), 1);
      return {
        ...state,
        tags: newTags
      }
    case 'AGE_RANGE':
      return {
        ...state,
        minAge: action.minAge,
        maxAge: action.maxAge
      }
    case 'SCORE_RANGE':
      return {
        ...state,
        minScore: action.minScore,
        maxScore: action.maxScore
      }
    case 'LOCALISATION_RANGE':
      return {
        ...state,
        minLocalisation: action.minLocalisation,
        maxLocalisation: action.maxLocalisation
      }
    case 'SEARCH_SUBMIT':
      return {
        ...state,
        data: action.data,
        searchResult: true
      }
    case 'FILTER':
      return {
        ...state,
        ageFilter: action.ageFilter,
        scoreFilter: action.scoreFilter,
        localisationFilter: action.localisationFilter,
        tagsFilter: action.tagsFilter
      }
    default:
      return state;
  }
}