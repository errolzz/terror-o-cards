import React from "react";
import PropTypes from "prop-types";
import ConnectedMenu from "features/menu/ConnectedMenu";
import "./Home.css";

const Home = () => (
  <div className="page">
    <h1>Terror O Cards</h1>
    <ConnectedMenu />
  </div>
);

Home.propTypes = {
  // this provides route info, will cause lint error
  match: PropTypes.object,
};

Home.defaultProps = {
  match: {},
};

export default Home;
