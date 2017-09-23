import React from 'react';
import './sentiment.css';
import { connect } from 'react-redux';

class Sentiment extends React.Component {
  constructor(props) {
    super(props);
    this.getSentiment();
  }


sentiment = () => {
  let raw = 'Money isn’t the most important thing in the world. Your time is good or bad. terrific , wonderful.';
  let ignore = ['a', 'the', 'it', 'we', 'I', 'you', 'your', 'its', 'from', 'for', 'as', 'an', 'is', 'in',]
  let positive = ['good','great', 'nice', 'wonderful', 'terrific', 'superlative','sensational', 'fantastic' ];
  let negative = ['bad', 'terrible', 'awful', 'disappointing', 'horrible'];
    let raw1 = raw.toLowerCase().split(' ');
    let negativeCount = 0;
    let positiveCount = 0;
    for (let j = 0; j < raw1.length ; j++) {
      if (positive.indexOf(raw1[j]) !== -1) positiveCount ++;
      if (negative.indexOf(raw1[j]) !== -1) negativeCount ++;
    }
    return <div>{positiveCount-negativeCount}</div>;
  }

  getSentiment = () => {
  const searchParams = new URLSearchParams();
  searchParams.append('key', '37bc84eb8886f5410c62335d9f653e8d');
  searchParams.append('lang', 'en');
  searchParams.append('txt', this.props.input);
  return fetch('http://api.meaningcloud.com/sentiment-2.1',  {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
    body: searchParams
  })
  .then(response => response.json())
  .then(response => {console.log('SENTIMENT', response)
    this.props.addSentiment(response);
  })
  }


    render () {
      return (
        <div>
        <h2>Sentiment</h2>
          <div className="SentimentScore">{this.sentiment()}</div>
        </div>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    sentiment: state.sentiment,
    search: state.search
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addSentiment: (sentiment) => dispatch({
      type: 'ADD_SENTIMENT',
      sentiment
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Sentiment);
