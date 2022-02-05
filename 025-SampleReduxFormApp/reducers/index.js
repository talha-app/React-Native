import { combineReducers } from "redux";
import { reducer } from "redux-form";

const reducers = {
  form: reducer,
};

export const allReducers = combineReducers({ count: reducers });
