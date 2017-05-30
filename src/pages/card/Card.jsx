import React from "react";
import PropTypes from "prop-types";
import ConnectedStory from "features/story/ConnectedStory";

const Card = ( { match } ) => (
  <div className="page">
    <ConnectedStory slug={ match.params.slug } />
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
