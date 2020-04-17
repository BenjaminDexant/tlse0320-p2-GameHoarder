/* eslint-disable no-useless-constructor */
import React from 'react';
// import StarRating from './StarRating';
import PropTypes from 'prop-types';

class NewGameCard extends React.Component {
  constructor(props) {
    super(props);
  }

  getDataGame(event) {
    const getDataNode = event.target.parentNode.parentNode;
    const img = getDataNode.children[0].style.cssText;
    const title = getDataNode.children[1].children[0].children[0].innerText;

    console.log(img);
    console.log(title);

    const values = {
      title,
      img
    };

    console.log(values);
    localStorage.setItem(title, JSON.stringify(values));
  }

  render() {
    const { name } = this.props;
    const { url } = this.props;

    return (
      <div className="Card">
        <div className="ImageCard" style={{ backgroundImage: `url(${url})` }} />
        <div className="GameInfo">
          <div className="GameInfoTitle">
            <h3 className="GameName">{name}</h3>
            <div className="ButtonAddWishlist">Wishlist</div>
          </div>
          <p className="GameSupport">Game support</p>
          <div className="GameRating">Game Rating</div>
          <div className="ButtonAddLibrary" onClick={this.getDataGame}>
            Ajouter à ma bibliothèque
          </div>
        </div>
      </div>
    );
  }
}

NewGameCard.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default NewGameCard;
