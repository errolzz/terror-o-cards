import { connect } from "react-redux";
import { loadAllStories } from "dux/menu";
import Menu from "./Menu";

// maps the redux state to this components props
const mapStateToProps = state => ( {
  isFetching: state.menu.isFetching,
  stories: state.menu.stories,
} );

// provide the component with the dispatch method
const mapDispatchToProps = dispatch => ( {
  loadStories: () => {
    dispatch( loadAllStories() );
  },
} );

export default connect( mapStateToProps, mapDispatchToProps )( Menu );
