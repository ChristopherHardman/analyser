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
  const searchParams = new URLSearchParams();
  searchParams.append('key', '37bc84eb8886f5410c62335d9f653e8d');
  searchParams.append('lang', 'en');
  searchParams.append('url', this.props.search.input);
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

getPositivity() {
    let test =  {sentiment: 'Very positive'}
    let sum = this.props.sentiment;
    return <p><span>Positivity:</span> {sum.score_tag}</p>
  }

getConfidence() {
    let test =  {sentiment: 'Very positive'}
    let sum = this.props.sentiment;
    return <p><span>Confidence:</span> {sum.confidence}</p>
  }

getIrony() {
    let test =  {sentiment: 'Very positive'}
    let sum = this.props.sentiment;
    return <p><span>Irony:</span> {sum.irony}</p>
  }

getAgreement() {
    let test =  {sentiment: 'Very positive'}
    let sum = this.props.sentiment;
    return <p><span>Agreement:</span>{sum.agreement}</p>
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
