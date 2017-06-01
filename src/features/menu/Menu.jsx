import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { TAGS, LABELS } from "constants/constants";
import "./Menu.css";

const Menu = ( { stories } ) => {
  const wands = filterCards( stories, TAGS.WANDS );
  const coins = filterCards( stories, TAGS.COINS );
  const swords = filterCards( stories, TAGS.SWORDS );
  const cups = filterCards( stories, TAGS.CUPS );
  const major = filterCards( stories, TAGS.MAJOR );

  const logo = require( "../../assets/images/terror-o-cards.svg" );

  return (
    <div className="menu">
      <div className="logo">
        <img src={ logo } alt="terror-o-cards" />
      </div>
      { makeCardList( wands, LABELS.WANDS ) }
      { makeCardList( coins, LABELS.COINS ) }
      { makeCardList( swords, LABELS.SWORDS ) }
      { makeCardList( cups, LABELS.CUPS ) }
      { makeCardList( major, LABELS.MAJOR ) }
    </div>
  );
};

function filterCards( stories, suit ) {
  return stories.filter( story => (
    story.fields.suit === suit
  ) );
}

function makeLinks( cards ) {
  return cards.map( ( card ) => {
    const d = new Date( card.fields.date );
    const date = `${ d.getMonth() + 1 }/${ d.getDate() }/${ d.getFullYear() }`;
    return (
      <Link key={ card.fields.slug } to={ `/${ card.fields.slug }` }>{ `${ card.fields.title } - ${ date }` }</Link>
    );
  } );
}

function makeCardList( cards, label ) {
  if ( cards.length > 0 ) {
    const up = [];
    const down = [];

    cards.forEach( ( card ) => {
      if ( card.fields.direction === TAGS.UP ) {
        up.push( card );
      } else {
        down.push( card );
      }
    } );

    const upLinks = makeLinks( up );
    const downLinks = makeLinks( down );

    return (
      <div>
        <div className="list-header">
          <div className="up"><h3>{ LABELS.UP }</h3></div>
          <h2>{ label }</h2>
          <div className="down"><h3>{ LABELS.DOWN }</h3></div>
        </div>
        <div className="list-holder">
          <div>{ upLinks }</div>
          <div>{ downLinks }</div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

Menu.propTypes = {
  stories: PropTypes.array,
};

Menu.defaultProps = {
  stories: [],
};

export default Menu;
