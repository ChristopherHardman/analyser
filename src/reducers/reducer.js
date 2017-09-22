const defaultState = {
  summary: {}
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
      console.log('ACTION',action.summary)
      return {
        ...state,
        summary: {
          ...action.summary
        }
      }

      default:
    }
    return state;
  }


  export default reducer;
