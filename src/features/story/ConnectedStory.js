import { connect } from "react-redux";
import Story from "./Story";

// maps the redux state to this components props
const mapStateToProps = state => ( {
  stories: state.menu.stories,
} );

export default connect( mapStateToProps )( Story );
