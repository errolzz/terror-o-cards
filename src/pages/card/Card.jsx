import React from "react";
import PropTypes from "prop-types";
import ConnectedMore from "features/more/ConnectedMore";

const Cardclass = ( { match } ) => (
  <div className="page">
    <h1>Hello {match.params.id}</h1>
    <ConnectedMore />
  </div>
);

Cardclass.propTypes = {
  // this provides route info, will cause lint error
  match: PropTypes.object,
};

Cardclass.defaultProps = {
  match: {},
};

export default Cardclass;
