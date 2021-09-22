import { combineReducers } from "redux";
import { invoicesReducer } from "./invoices/reducers";
import { listNumbersReducer } from "./listNumbers/reducers";

export const rootReducers = combineReducers({
  listNumbers: listNumbersReducer,
  invoices: invoicesReducer
});
