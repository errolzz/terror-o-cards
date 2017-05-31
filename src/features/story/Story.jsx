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
        <h1>{ story.title }</h1>
        <p>{ story.body }</p>
        <footer>
          <div className="back"><Link to="/">Index</Link></div>
          <div className="date">{ date }</div>
        </footer>
      </div>
    </div>
  );
};

Story.propTypes = {
  story: PropTypes.shape( {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
  } ).isRequired,
};

export default Story;
