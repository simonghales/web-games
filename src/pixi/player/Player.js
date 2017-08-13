import * as PIXI from 'pixi.js';

export class Player {

  playerSprite;

  constructor(playerNumber, playersCount, stageWidth, stageHeight) {
    this.playerSprite = new PIXI.Sprite(PIXI.loader.resources['banana'].texture);
    // center the sprite's anchor point
    this.playerSprite.anchor.set(0.5);
    this.playerSprite.scale.set(0.5, 0.5);

    // move the sprite to the center of the screen
    const remainingSpace = (stageWidth - (174 * playersCount)) / playersCount;
    this.playerSprite.x = (((playerNumber / playersCount) * stageWidth) - 86) + 100;
    this.playerSprite.y = window.innerHeight - 250;
  }

}