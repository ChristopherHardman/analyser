const defaultState = {
  events: {}
}

const objectifyArray = (array, idKey = 'title') => {
  return array.reduce((accum, item) => {
    accum[item[idKey]] = item
    return accum;
  }, {})
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_EVENTS':
      return {
        ...state,
        events: {
          ...state.events,
          ...objectifyArray(action.events)
        }
      }

      default:
    }
    return state;
  }


  export default reducer;
