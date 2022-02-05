import {combineReducers} from "redux";
import countReducer from "./countReducer";

export const allReducers = combineReducers({count:countReducer})
