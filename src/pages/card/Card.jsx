import React from "react";
import PropTypes from "prop-types";
import Story from "features/story/Story";

const Card = ( { match } ) => (
  <div className="page">
    <h1>Hello {match.params.id}</h1>
    <Story />
  </div>
);

Card.propTypes = {
  // this provides route info, will cause lint error
  match: PropTypes.object,
};

Card.defaultProps = {
  match: {},
};

export default Card;
