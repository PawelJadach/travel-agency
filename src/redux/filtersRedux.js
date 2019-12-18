/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
// TODO - add other action types
export const CHANGE_DURATION_FROM = createActionName('CHANGE_DURATION_FROM');
export const CHANGE_DURATION_TO = createActionName('CHANGE_DURATION_TO');
export const ADD_TAG = createActionName('ADD_TAG');
export const REMOVE_TAG = createActionName('REMOVE_TAG');
// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
// TODO - add other action creators
export const changeDurationFrom = (value) => ({ value , type: CHANGE_DURATION_FROM});
export const changeDurationTo = (value) => ({ value , type: CHANGE_DURATION_TO});
export const addTag = (tag) => ({ tag , type: ADD_TAG});
export const removeTag = (tag) => ({ tag , type: REMOVE_TAG});
// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    // TODO - handle other action types
    case CHANGE_DURATION_FROM:
      //console.log(action);
      return {
        ...statePart,
        duration: {from: Number(action.value), to: statePart.duration.to},
      };
    case CHANGE_DURATION_TO:
      //console.log(action.value);
      return {
        ...statePart,
        duration: {to: Number(action.value), from: statePart.duration.from},
      };
    case ADD_TAG:
      //console.log(statePart);
      return {
        ...statePart,
        tags: [...statePart.tags, action.tag],
      };
    case REMOVE_TAG:
      //console.log(action.value);
      return {
        ...statePart,
        tags: statePart.tags.filter(tag => tag !== action.tag ),
      };
    default:
      return statePart;
  }
}
