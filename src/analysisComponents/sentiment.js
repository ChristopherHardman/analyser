import React from 'react';
import './sentiment.css';
import { connect } from 'react-redux';

class Sentiment extends React.Component {
  constructor(props) {
    super(props);
      this.getSentiment();
  }

getSentiment = () => {
  console.log('GetSentiment Fired');
  let target = this.props.search.input;
  if (this.props.switch ==="2") target = this.props.search2;
  if (this.props.switch ==="3") target = this.props.search3;
  const searchParams = new URLSearchParams();
  searchParams.append('key', '37bc84eb8886f5410c62335d9f653e8d');
  searchParams.append('lang', 'en');
  searchParams.append('url', target);
    return fetch('http://api.meaningcloud.com/sentiment-2.1',  {
      method: 'POST',
      headers: {
          'content-type': 'application/x-www-form-urlencoded',
        },
        body: searchParams
      })
      .then(response => response.json())
      .then(response => {console.log('SENTIMENT', response)
      if (this.props.switch ==="2") this.props.addSentiment2(response);
      if (this.props.switch ==="3") this.props.addSentiment3(response);
        this.props.addSentiment(response);
    })
}

getPositivity() {
    let sum = this.props.sentiment;
    if (this.props.switch ==="2") sum = this.props.sentiment2;
    if (this.props.switch ==="3") sum = this.props.sentiment3;
    let translation = { };
    translation['P+'] = "Strong positive";
    translation.P = "Positive";
    translation.NEU =  "Neutral";
    translation.N = "Negative";
    translation['N+'] = "Strong negative";
    translation.NONE = "Without sentiment";
    return <p><span>Positivity: </span> <span className="sentimentData">{translation[sum.score_tag]}</span></p>
  }

getConfidence() {
    let sum = this.props.sentiment;
    if (this.props.switch ==="2") sum = this.props.sentiment2;
    if (this.props.switch ==="3") sum = this.props.sentiment3;
    return <p><span>Confidence: </span> <span className="sentimentData">{sum.confidence}% </span></p>
  }

getIrony() {
    let sum = this.props.sentiment;
    if (this.props.switch ==="2") sum = this.props.sentiment2;
    if (this.props.switch ==="3") sum = this.props.sentiment3;
    return <p><span>Irony: </span><span className="sentimentData">{sum.irony}</span></p>
  }

getAgreement() {
    let sum = this.props.sentiment;
    if (this.props.switch ==="2") sum = this.props.sentiment2;
    if (this.props.switch ==="3") sum = this.props.sentiment3;
    return <p><span>Agreement: </span><span className="sentimentData">{sum.agreement}</span></p>
  }

render () {
  return (
    <div className="sentimentHolder">
      <h2>Sentiment</h2>
      <div className="sentimentScore">{this.getPositivity()}</div>
      <div className="sentimentScore">{this.getConfidence()}</div>
      <div className="sentimentScore">{this.getIrony()}</div>
      <div className="sentimentScore">{this.getAgreement()}</div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    search: state.search,
    search2: state.search2,
    search3: state.search3,
    sentiment: state.sentiment,
    sentiment2: state.sentiment2,
    sentiment3: state.sentiment3
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addSentiment: (sentiment) => dispatch({
      type: 'ADD_SENTIMENT',
      sentiment
    }),
    addSentiment2: (sentiment) => dispatch({
      type: 'ADD_SENTIMENT2',
      sentiment
    }),
    addSentiment3: (sentiment) => dispatch({
      type: 'ADD_SENTIMENT3',
      sentiment
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Sentiment);
