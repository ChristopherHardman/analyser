import React from 'react';
import './comparison.css';
import Header from '../components/header'
import Headline from '../components/headline'
import WordCount from '../analysisComponents/wordCount'
import Details from '../components/details'
import Summary from '../analysisComponents/summary'
import Sentiment from '../analysisComponents/sentiment'

class Analysis extends React.Component {
    render () {
      return (
        <div>
          <Header />
          <Headline />
          <WordCount />
          <div className="summaryAndSentiment">
            <Summary />
            <Sentiment />
          </div>
          <Details />
        </div>
      )
    }
}

export default Analysis;
