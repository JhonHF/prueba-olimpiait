import { listNumbersActionTypes } from "./actionTypes";

export const setListNumbers = (list) => ({
  type: listNumbersActionTypes.SET_LIST_NUMBERS,
  payload: list,
});
