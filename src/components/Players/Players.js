import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Players.css';
import PlayerBlob from '../PlayerBlob/PlayerBlob';

class Players extends Component {

  playerCount = 0;

  state: {
    players: []
  };

  constructor(props) {
    super(props);
    this.state = {
      players: this.generateRandomPlayers(5)
    };
    this.randomlyGeneratePlayers = this.randomlyGeneratePlayers.bind(this);
    this.randomlyRemovePlayers = this.randomlyRemovePlayers.bind(this);
    this.generateRandomPlayers = this.generateRandomPlayers.bind(this);
  }

  componentDidMount() {
    this.randomlyGeneratePlayers();
    setTimeout(this.randomlyRemovePlayers, 2500);
  }

  randomlyGeneratePlayers() {
    this.setState({
      players: this.state.players.concat(this.generateRandomPlayers())
    });
    setTimeout(this.randomlyGeneratePlayers, 10000);
  }

  randomlyRemovePlayers() {
    let reducedPlayers = this.state.players.slice();
    const removalIndex = randomIntFromInterval(0, reducedPlayers.length);
    console.log('removalIndex', removalIndex);
    reducedPlayers.splice(removalIndex, 1);
    this.setState({
      players: reducedPlayers
    });
    setTimeout(this.randomlyRemovePlayers, 10000);
  }

  generateRandomPlayers(numberOfPlayers: number = 1) {
    let players = [];
    for (let i = 0; i < numberOfPlayers; i++) {
      this.playerCount++;
      players.push(this.playerCount);
    }
    return players;
  }

  render() {
    return (
      <div className='Players'>
        <ReactCSSTransitionGroup
          transitionName={'playerBlob'}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {
            this.state.players.map((player, index) => (
              <PlayerBlob key={player}/>
            ))
          }
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default Players;