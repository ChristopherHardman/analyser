import React from 'react';
import './wordCount.css';

class WordCount extends React.Component {
  constructor(props) {
    super(props);
    this.wordCount();
  }

  wordCount =() => {
    let raw = 'Money isn’t the most important thing in the world. Your time is. the most important thing in the world. Your time is.';
    let ignore = ['a', 'the', 'it', 'we', 'I', 'you', 'your', 'its', 'from', 'for', 'as', 'an', 'is', 'in',]
    let positive = ['good','great', 'nice', 'wonderful', 'terrific', 'superlative','sensational', 'fantastic' ];
    let negative = ['bad', 'terrible', 'awful', 'disappointing', 'horrible'];
    let raw1 = raw.toLowerCase().split(' ');
    let res = {};
    let res1 = [];
      for (let i=0; i<raw1.length; i++) {
          if (res[raw1[i]]) res[raw1[i]] ++;
          else {
            if (ignore.indexOf(raw1[i]) === -1) res[raw1[i]] = 1;
          }
        }
      for (var key in res) {
        res1.push(
          <div>{key} : {res[key]}</div>
        )
      }
      console.log('RES1', res1);
      return res1;
    }

    render () {
      return (
        <div className="BubbleContainer">
          <h2 className="WordCountTitle">Word Frequency</h2>
          <div className="Frequency">
            <div>{this.wordCount()}</div>
            <div className = "circle"></div>
            <div className = "circle1"></div>
            <div className = "circle2"></div>
          </div>
        </div>

      )
    }
}

export default WordCount;
