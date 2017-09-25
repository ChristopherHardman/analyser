const defaultState = {
  summary: {},
  concepts: {},
  sentiment: {},
  search: {},
  search2: {},
  search3: {}
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
    console.log('Received Summary')
      return {
        ...state,
        summary: action.summary
      }
    case 'ADD_SEARCH':
    console.log('Received Search term', action.search)
      let res= {
        ...state,
        search: action.search
      }
      console.log('RES', res.search)
      return res
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
    case 'ADD_SEARCH_DOUBLE':
      console.log('DOUBLE', action.search2.input2)
      return {
        ...state,
        search2: action.search2.input2,
        search3: action.search2.input3
      }
      default:
    }
    return state;
  }


  export default reducer;
