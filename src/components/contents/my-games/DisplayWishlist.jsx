import React from 'react';
import PropTypes from 'prop-types';
import './MyGameCard.scss';
/* import NewGameCard from './NewGameCard';
import games from '../../data/games.json';

const DisplayWishlist = ({ value, addToWishlist }) => {
  const displayWishlist = value =>
    games
      .filter(game => (value ? game.name.toUpperCase().includes(value.toUpperCase()) : game))
      .map(game => (
        <div>
          <NewGameCard {...game} addToWishlist={addToWishlist} key={`new-game-${game.name}`} />
        </div>
      ));

  return <div className="grid-cards-display">{displayWishlist(value)}</div>;
};

DisplayWishlist.propTypes = {
  value: PropTypes.string.isRequired,
  addToWishlist: PropTypes.func.isRequired
}; */

export default function DisplayWishlist({ handleClose, show, children }) {
  return (
    <div className={show ? 'modal display-block' : 'modal display-none'}>
      <section className="modal-main">
        {children}
        <div className="modal-div">
          <h3>Ma Wishlist</h3>
        </div>
      </section>
    </div>
  );
}

DisplayWishlist.propTypes = {
  handleClose: PropTypes.string.isRequired,
  show: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

/* export default DisplayWishlist;
 */
