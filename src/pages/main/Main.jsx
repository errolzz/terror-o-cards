import React from "react";
import PropTypes from "prop-types";
import Menu from "features/menu/Menu";
import Story from "features/story/Story";
import "./Main.css";

class Main extends React.Component {
  componentDidMount() {
    if ( this.props.stories.length === 0 ) this.props.loadStories();
  }

  render() {
    let view;
    if ( this.props.match.params.slug && this.props.stories.length > 0 ) {
      // render story
      const story = this.props.stories.find( s => (
        s.fields.slug === this.props.match.params.slug
      ) );
      view = <Story story={ story.fields } />;
    } else {
      // render menu
      view = <Menu stories={ this.props.stories } />;
    }
    return (
      <div className="page">
        <h1>terror-o-cards</h1>
        { view }
      </div>
    );
  }
}

Main.propTypes = {
  loadStories: PropTypes.func.isRequired,
  stories: PropTypes.array,
  match: PropTypes.object,
};

Main.defaultProps = {
  stories: [],
  match: {},
};

export default Main;
