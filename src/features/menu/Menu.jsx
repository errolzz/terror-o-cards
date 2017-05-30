import React from "react";
import PropTypes from "prop-types";
// import { TAGS } from "../../constants/constants";
import { Link } from "react-router-dom";
import "./Menu.css";

class Menu extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      wands: [],
      coins: [],
      swords: [],
      cups: [],
      major: [],
    };
  }

  componentDidMount() {
    this.props.loadStories();
  }

  /*
  filterCards( suit ) {
    return this.props.stories.filter( ( story ) => {
      return story.fields.tags.forEach( tag => (
        tag === suit
      ) );
    } );
  }*/

  render() {
    return (
      <div className="menu">
        {
          this.props.stories.map( story => (
            <Link key={ story.fields.slug } to={ `card/${ story.fields.slug }` }>{ story.fields.title }</Link>
          ) )
        }
      </div>
    );
  }
}

Menu.propTypes = {
  loadStories: PropTypes.func.isRequired,
  stories: PropTypes.array,
};

Menu.defaultProps = {
  stories: [],
};

export default Menu;
