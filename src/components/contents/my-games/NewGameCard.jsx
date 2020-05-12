import React from 'react';
import PropTypes from 'prop-types';

class NewGameCard extends React.Component {
  constructor(props) {
    super(props);
    this.getDataGame = this.getDataGame.bind(this);
  }

  getDataGame() {
    const { url: img, name: title, rating, handleGamesList, id } = this.props;
    const values = {
      addingDate: new Date(),
      title,
      img,
      rating,
      id,
      addToLib: true
    };
    handleGamesList(values);
  }

  render() {
    const { rating, name, url, addToLib } = this.props;
    return (
      <div className="Card">
        <div className="ImageCard" style={{ backgroundImage: `url(${url[0]})` }} />
        <div className="GameInfo">
          <div className="GameInfoTitle">
            <h3 className="GameName">{name}</h3>
            <div className="ButtonAddWishlist">
              <img src="/img/svg/wishlist.svg" alt="icon whislist" />
            </div>
          </div>
          <p className="GameSupport">Game support</p>
          <div className="GameRating">{rating / 10 / 2}</div>
          <div className="ButtonAddLibrary" onClick={this.getDataGame}>
            <img
              src={addToLib ? '/img/svg/delete-white.svg' : '/img/svg/add.svg'}
              alt="icon add library"
            />
            {addToLib ? 'Déjà dans votre bibliothèque.' : 'Ajouter à votre bibliothèque.'}
          </div>
        </div>
      </div>
    );
  }
}
NewGameCard.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  addToLib: PropTypes.string.isRequired,
  handleGamesList: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

export default NewGameCard;
