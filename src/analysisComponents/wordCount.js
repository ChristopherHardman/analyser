import React from 'react';
import './wordCount.css';

class WordCount extends React.Component {
    render () {
      return (
        <div className="BubbleContainer">
          <p>Bubble chart</p>
          <div className = "circle"></div>
          <div className = "circle1"></div>
          <div className = "circle2"></div>
        </div>
      )
    }
}

export default WordCount;
