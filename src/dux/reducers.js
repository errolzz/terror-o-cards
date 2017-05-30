import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

// add all reducers
import something from "./something";
import more from "./more";

// combine and export
export default combineReducers( {
  router: routerReducer,
  something,
  more,
} );
