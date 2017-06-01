import { connect } from "react-redux";
import { push } from "react-router-redux";
import { loadAllStories } from "dux/main";
import Main from "./Main";

// maps the redux state to this components props
const mapStateToProps = state => ( {
  isFetching: state.main.isFetching,
  stories: state.main.stories,
} );

// provide the component with the dispatch method
const mapDispatchToProps = dispatch => ( {
  loadStories: () => {
    dispatch( loadAllStories() );
  },
  crapRoute: () => {
    dispatch( push( "/" ) );
  },
} );

export default connect( mapStateToProps, mapDispatchToProps )( Main );
