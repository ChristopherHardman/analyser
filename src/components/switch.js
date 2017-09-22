import React from 'react';
import './switch.css';

class Switch extends React.Component {
    render () {
      return (
        <div className="switchHolder">
        <a href="/" className="button">Analyse</a>
        <a href="/compare" className="button">Compare</a>
        </div>
      )
    }

}

export default Switch;
