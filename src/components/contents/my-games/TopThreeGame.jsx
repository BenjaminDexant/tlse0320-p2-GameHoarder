import React from 'react';
import PropTypes from 'prop-types';
import DisplayRating from './DisplayRating';

function TopThreeGame(props) {
  const { name, url, rating, listGamesLib, handleRemoveWishlistGame } = props;

  const setDatasGameLocalStorage = data => {
    const { url: img, name: title, rating, handleGamesList, platformsName, id } = data;
    const values = {
      addingDate: new Date(),
      title,
      img,
      rating,
      platformsName,
      id,
      addToLib: true,
      addToWish: false
    };
    handleGamesList(values);
  };

  const addToWishlist = () => {
    const { url: img, name: title, rating, handleWishlistGame, id, platformsName } = props;
    const values = {
      addingDate: new Date(),
      title,
      img,
      rating,
      id,
      platformsName,
      addToLib: false,
      addToWish: true
    };
    handleWishlistGame(values);
  };

  const removeToWishlist = () => {
    const { url: img, name: title, rating, handleWishlistGame, id, platformsName } = props;
    const values = {
      addingDate: new Date(),
      title,
      img,
      rating,
      id,
      platformsName,
      addToLib: false,
      addToWish: false
    };
    handleRemoveWishlistGame(values);
  };

  let isWish;
  if (listGamesLib) {
    const newAr = listGamesLib.filter(game => game.title === props.name);
    isWish = newAr.length > 0 && newAr[0].addToWish;
  }
  if (listGamesLib === undefined) {
    isWish = false;
  }

  return (
    <div className="card" style={{ backgroundImage: `url('${url[0]}')` }}>
      <div className="container">
        <div className="header">
          <div className="title-card">
            <h3>{name}</h3>
          </div>
          <div className="group">
            <div className="wishlist" onClick={isWish ? removeToWishlist : addToWishlist}>
              <img
                src={isWish ? '/img/svg/redheart.svg' : '/img/svg/wishlist.svg'}
                alt="icon wishlist"
              />
            </div>
            <button className="add" type="submit" onClick={() => setDatasGameLocalStorage(props)}>
              <img src="/img/svg/add.svg" alt="icon add" />
            </button>
          </div>
        </div>
        <div className="footer">
          <DisplayRating rating={rating} />
        </div>
      </div>
    </div>
  );
}

TopThreeGame.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.array.isRequired,
  rating: PropTypes.number.isRequired,
  handleWishlistGame: PropTypes.func.isRequired,
  platformsName: PropTypes.array.isRequired
};

export default TopThreeGame;
