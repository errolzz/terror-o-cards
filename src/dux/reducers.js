import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

// add all reducers
import main from "./main";

// combine and export
export default combineReducers( {
  router: routerReducer,
  main,
} );
