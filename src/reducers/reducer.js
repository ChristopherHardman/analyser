const defaultState = {
  summary: {},
  summary2: {},
  summary3: {},
  concepts: {},
  concepts2: {},
  concepts3: {},
  sentiment: {},
  sentiment2: {},
  sentiment3: {},
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
      return {
        ...state,
        summary: action.summary
      }
    case 'ADD_SUMMARY2':
      return {
        ...state,
        summary2: action.summary
      }
    case 'ADD_SUMMARY3':
      return {
        ...state,
        summary3: action.summary
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
    case 'ADD_CONCEPTS2':
      return {
        ...state,
        concepts2: {
          ...action.concepts
        }
      }
    case 'ADD_CONCEPTS3':
      return {
        ...state,
        concepts3: {
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
    case 'ADD_SENTIMENT2':
      return {
        ...state,
        sentiment2: {
        ...action.sentiment
        }
      }
    case 'ADD_SENTIMENT3':
      return {
        ...state,
        sentiment3: {
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
