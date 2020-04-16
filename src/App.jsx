import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import MyGames from './components/contents/MyGames';
import NewGames from './components/contents/NewGames';
import Footer from './components/footer/Footer';
import MobileNav from './components/mobile-nav/MobileNav';
import Title from './components/contents/title/Title';
import GetGames from './components/data/getCardData/GetCardData';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mygameInputValue: null };
    this.state = { newgameInputValue: null };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const valueToChange = event.target.value;
    const inputSearchInputValue = event.target.name;
    this.setState({ [inputSearchInputValue]: valueToChange });
  }

  render() {
    const { mygameInputValue } = this.state;
    const { newgameInputValue } = this.state;
    const { handleChange } = this;

    return (
      <div className="App">
        <Header />
        <section id="content">
          <GetGames />
          <Title title="Ma bibliothèque " span="de jeux" />
          <MyGames value={mygameInputValue} handleChange={handleChange} />
          <Title title="Ajouter des " span="jeux" />
          <NewGames value={newgameInputValue} handleChange={handleChange} />
        </section>
        <Footer />
        <MobileNav />
      </div>
    );
  }
}

export default App;
