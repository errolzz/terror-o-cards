import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = ( { stories } ) => {
  /*
  const wands = [];
  const coins = [];
  const swords = [];
  const cups = [];
  const major = [];*/

  return (
    <div className="menu">
      {
        stories.map( story => (
          <Link key={ story.fields.slug } to={ `/${ story.fields.slug }` }>{ story.fields.title }</Link>
        ) )
      }
    </div>
  );
};

Menu.propTypes = {
  stories: PropTypes.array,
};

Menu.defaultProps = {
  stories: [],
};

export default Menu;
