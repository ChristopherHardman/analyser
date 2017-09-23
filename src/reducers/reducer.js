const defaultState = {
  summary: {},
  concepts: {},
  sentiment: {},
  search: {}
}

// const objectifyArray = (array, idKey = 'title') => {
//   return array.reduce((accum, item) => {
//     accum[item[idKey]] = item
//     return accum;
//   }, {})
// };

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_SUMMARY':
      return {
        ...state,
        summary: {
          ...action.summary
        }
      }
    case 'ADD_SEARCH':
      return {
        ...state,
        search: {
          ...action.search
        }
      }

    case 'ADD_CONCEPTS':
      return {
        ...state,
        concepts: {
          ...action.concepts
        }
      }

    case 'ADD_SENTIMENT':
      return {
        ...state,
        sentiment: {
        ...action.sentiment
        }
      }

      default:
    }
    console.log('STATE', state);
    return state;
  }


  export default reducer;
