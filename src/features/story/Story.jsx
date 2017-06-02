import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Story.css";

const Story = ( { story } ) => {
  const d = new Date( story.date );
  const date = `${ d.getMonth() + 1 }/${ d.getDate() }/${ d.getFullYear() }`;

  return (
    <div className="story">
      <div>
        <h1>{ `${ story.title } - ${ toTitleCase( story.suit ) } - ${ toTitleCase( story.direction ) }` }</h1>
        <article dangerouslySetInnerHTML={ { __html: story.body } } />
        <footer>
          <div className="back"><Link to="/">&lsaquo; Index</Link></div>
          <div className="date">{ date }</div>
        </footer>
      </div>
    </div>
  );
};

function toTitleCase( str ) {
    return str.replace( /\w\S*/g, txt => (
      txt.charAt( 0 ).toUpperCase() + txt.substr( 1 ).toLowerCase()
    ) );
}

Story.propTypes = {
  story: PropTypes.shape( {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    direction: PropTypes.string.isRequired,
    suit: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
  } ).isRequired,
};

export default Story;
