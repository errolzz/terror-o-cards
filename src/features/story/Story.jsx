import React from "react";
import PropTypes from "prop-types";
import "./Story.css";

const Story = ( { story } ) => (
  <div className="story">
    <div>
      <h1>{ story.title }</h1>
      <p>{ story.body }</p>
    </div>
  </div>
);

Story.propTypes = {
  story: PropTypes.shape( {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
  } ).isRequired,
};

export default Story;
