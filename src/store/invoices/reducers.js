import { invoicesActionTypes } from "./actionTypes";

const initialState = {
  listInvoices: [],
};

export const invoicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case invoicesActionTypes.ADD_INVOICE: {
      return {
        ...state,
        listInvoices: [...state.listInvoices, action.payload],
      };
    }
    default:
      return state;
  }
};
