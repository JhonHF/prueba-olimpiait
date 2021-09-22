import { invoicesActionTypes } from "./actionTypes";

export const addInvoice = (invoice) => ({
  type: invoicesActionTypes.ADD_INVOICE,
  payload: invoice,
});
