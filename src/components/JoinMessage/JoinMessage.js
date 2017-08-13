import React, {Component} from 'react';
import './JoinMessage.css';

class JoinMessage extends Component {
  render() {
    return (
      <div className='JoinMessage'>
        <h3 className='JoinMessage__title'>To join the fun visit</h3>
        <div className='JoinMessage__linkWrapper'>
          <a className='JoinMessage__link' href='' target='_blank'>xyz.com/<span>BLUESTAR</span></a>
        </div>
      </div>
    );
  }
}

export default JoinMessage;