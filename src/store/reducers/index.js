import { combineReducers } from "redux";

import { cityReducer } from "./city";
import { forecastReducer } from "./forecast";

export const rootReducer = combineReducers({
  city: cityReducer,
  forecast: forecastReducer,
});
