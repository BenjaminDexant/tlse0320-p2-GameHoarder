import React from 'react';
import PropTypes from 'prop-types';
import ListNewGameCards from './my-games/ListNewGameCards';
import ListTopThreeGames from './my-games/ListTopThreeGames';
import Filters from './filter/Filters';
import Title from './title/Title';
import './newgames.scss';

function NewGames({
  value,
  handleChange,
  handleWishlistGame,
  games,
  handleGamesList,
  listGamesLib,
  handleRemoveWishlistGame,
  handleInfoGame
}) {
  return (
    <div className="new-games">
      <div className="container-box">
        <Title title="Ajouter des " span="jeux" />
        <Filters value={value} handleChange={handleChange} location="newgameInputValue" />
        <ListNewGameCards
          value={value}
          games={games}
          handleWishlistGame={handleWishlistGame}
          handleGamesList={handleGamesList}
          listGamesLib={listGamesLib}
          handleRemoveWishlistGame={handleRemoveWishlistGame}
          handleInfoGame={handleInfoGame}
        />
      </div>
      <div className="container-top-five">
        <div className="container-box">
          <Title title="Les jeux " span="du moment" />
          <ListTopThreeGames
            games={games}
            handleGamesList={handleGamesList}
            handleWishlistGame={handleWishlistGame}
          />
        </div>
      </div>
    </div>
  );
}

NewGames.propTypes = {
  value: PropTypes.string,
  games: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleWishlistGame: PropTypes.func.isRequired,
  handleGamesList: PropTypes.func.isRequired,
  listGamesLib: PropTypes.func.isRequired,
  handleInfoGame: PropTypes.func.isRequired,
  handleRemoveWishlistGame: PropTypes.func.isRequired
};
export default NewGames;
