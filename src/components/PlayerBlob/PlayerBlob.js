import React, {Component} from 'react';
import './PlayerBlob.css';
import {randomIntFromInterval} from '../Players/Players';

const SITE_MARGIN = 50;

class PlayerBlob extends Component {

  startingX;
  startingY;

  constructor(props) {
    super(props);

    const coordinates = this.generateRandomCoordinates();
    this.startingX = coordinates.x;
    this.startingY = coordinates.y;

    console.log('set starting x and y...', this.startingX, this.startingY);

  }

  generateRandomCoordinates() {
    let coordAttempts = 0;
    let xCoord = 0;
    let yCoord = 0;

    while (coordAttempts < 20) {
      xCoord = randomIntFromInterval(SITE_MARGIN, (window.innerWidth - SITE_MARGIN - 250));
      yCoord = randomIntFromInterval(SITE_MARGIN, (window.innerHeight - SITE_MARGIN - 250));
      if (((xCoord + 150) < ((window.innerWidth / 2) + 300)) && ((xCoord) > ((window.innerWidth / 2) - 300))
        && (((yCoord + 150) < ((window.innerHeight / 2) + 150)) && (yCoord > ((window.innerHeight / 2) - 150)))
      ) {
        console.log('trying again', xCoord, yCoord, coordAttempts);
        coordAttempts++;
      } else {
        console.log('all good', xCoord, yCoord);
        break;
      }
    }

    return {
      x: xCoord,
      y: yCoord
    }
  }

  render() {
    return (
      <div className='PlayerBlob' style={{
        transform: `translate(${this.startingX}px, ${this.startingY}px)`
      }}>
        <div className='PlayerBlob__blobWrapper'>
          <div className='PlayerBlob__blob'>
            USER BLOB
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerBlob;