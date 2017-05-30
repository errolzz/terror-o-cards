import { HTTP } from "constants/constants";

// actions
const THING_LOAD_REQUEST = "features/menu/THING_LOAD_REQUEST";
const THING_LOADED = "features/menu/THING_LOADED";
const THING_ERROR = "features/menu/THING_ERROR";

// initial state
const initialState = {
  isFetching: false,
  stories: [],
};

// Reducer
export default function reducer( state = initialState, action = {} ) {
  switch ( action.type ) {
    case THING_LOAD_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case THING_LOADED:
      return {
        ...state,
        isFetching: action.isFetching,
        stories: action.stories,
      };
    case THING_ERROR:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default: return state;
  }
}

// initialize loading state
function startStoriesLoad() {
  return {
    type: THING_LOAD_REQUEST,
    isFetching: true,
  };
}

// load completed
function storiesLoaded( json ) {
  return {
    type: THING_LOADED,
    isFetching: false,
    stories: json.items,
  };
}

// loading error
function storiesError( error ) {
  return {
    type: THING_ERROR,
    isFetching: false,
    error,
  };
}

// asyncronous action creator
export function loadLastTrack() {
  return ( dispatch ) => {
    // dispatch to start a spinner or to disable mouse actions
    dispatch( startStoriesLoad() );
    // load the data
    return fetch( HTTP.STORY_API )
      .then( response => response.json() )
      .then( json =>
        // dispatched loaded data
        dispatch( storiesLoaded( json ) ),
      )
      .catch( error =>
        // dispatched an http error occurred
        dispatch( storiesError( error ) ),
      );
  };
}
