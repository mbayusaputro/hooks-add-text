import { INPUT } from "./type"

const intialState = {
  isData: []
}

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case INPUT:
      console.log(state.isData)
      return {
        ...state,
        isData: [...state.isData, action.data]
      }
    default:
      return state;
  }
}

export default reducer;