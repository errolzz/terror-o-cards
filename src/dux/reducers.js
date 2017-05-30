import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

// add all reducers
import menu from "./menu";

// combine and export
export default combineReducers( {
  router: routerReducer,
  menu,
} );
