import React, {Component} from 'react';
import JoinMessage from '../JoinMessage/JoinMessage';
import './JoinScreen.css';
import PlayersBackground from '../PlayersBackground/PlayersBackground';

class JoinScreen extends Component {
  render() {
    return (
      <div className='JoinScreen'>
        <PlayersBackground/>
        <div className='JoinScreen__messageWrapper'>
          <JoinMessage/>
        </div>
      </div>
    );
  }
}

export default JoinScreen;