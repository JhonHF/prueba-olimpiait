import { listNumbersActionTypes } from "./actionTypes";

const initialState = {
  listNumbers: [],
};

export const listNumbersReducer = (state = initialState, action) => {
  switch (action.type) {
    case listNumbersActionTypes.SET_LIST_NUMBERS: {
      return {
        ...state,
        listNumbers: action.payload,
      };
    }
    default:
      return state;
  }
};
