import React, {Component} from 'react';
import * as PIXI from 'pixi.js';
import './PlayersBackground.css';
import {Player} from '../../pixi/player/Player';

class PlayersBackground extends Component {

  playerCount = 0;

  state: {
    players: []
  };

  pixiContainer;
  app;

  constructor(props) {
    super(props);
    this.state = {
      players: this.generateRandomPlayers(5)
    };
    this.initiatePixiContainer = this.initiatePixiContainer.bind(this);
    this.randomlyGeneratePlayers = this.randomlyGeneratePlayers.bind(this);
    this.randomlyRemovePlayers = this.randomlyRemovePlayers.bind(this);
    this.generateRandomPlayers = this.generateRandomPlayers.bind(this);
    this.loadAssets = this.loadAssets.bind(this);
    this.assetsLoaded = this.assetsLoaded.bind(this);
  }

  componentDidMount() {
    this.randomlyGeneratePlayers();
    setTimeout(this.randomlyRemovePlayers, 2500);
  }

  initiatePixiContainer(elem) {
    this.pixiContainer = elem;
    this.app = new PIXI.Application(
      window.innerWidth,
      window.innerHeight,
      {
        antialias: false,
        transparent: true,
        resolution: 1
      });
    this.app.renderer.autoResize = true;
    this.app.renderer.view.style.position = "absolute";
    this.app.renderer.view.style.display = "block";
    this.pixiContainer.appendChild(this.app.renderer.view);
    this.loadAssets();
  }

  loadAssets() {
    PIXI.loader
      .add('banana', process.env.PUBLIC_URL + '/assets/player/banana.png')
      .load(this.assetsLoaded);
  }

  assetsLoaded() {
    const stageWidth = window.innerWidth - 200;
    const stageHeight = window.innerHeight;
    const playersCount = 6;
    for (let i = 0; i < playersCount; i++) {
      const player = new Player(i + 1, playersCount, stageWidth, stageHeight);
      this.app.stage.addChild(player.playerSprite);
    }
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
      <div className='PlayersBackground'>
        <div className='PlayersBackground__pixiContainer'
             ref={(elem) => {
               if (!this.pixiContainer) {
                 this.initiatePixiContainer(elem);
               }
             }}
        ></div>
      </div>
    );
  }
}

export function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default PlayersBackground;