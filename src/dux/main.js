import { HTTP } from "constants/constants";

// actions
const STORIES_LOAD_REQUEST = "features/main/STORIES_LOAD_REQUEST";
const STORIES_LOADED = "features/main/STORIES_LOADED";
const STORIES_ERROR = "features/main/STORIES_ERROR";

// initial state
const initialState = {
  isFetching: false,
  stories: [],
};

// Reducer
export default function reducer( state = initialState, action = {} ) {
  switch ( action.type ) {
    case STORIES_LOAD_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case STORIES_LOADED:
      return {
        ...state,
        isFetching: action.isFetching,
        stories: action.stories,
      };
    case STORIES_ERROR:
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
    type: STORIES_LOAD_REQUEST,
    isFetching: true,
  };
}

// load completed
function storiesLoaded( json ) {
  return {
    type: STORIES_LOADED,
    isFetching: false,
    stories: json.items,
  };
}

// loading error
function storiesError( error ) {
  return {
    type: STORIES_ERROR,
    isFetching: false,
    error,
  };
}

// asyncronous action creator
export function loadAllStories() {
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
