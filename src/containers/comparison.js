import React from 'react';
import './analysis.css';
import Header from '../components/header'
import Headline from '../components/headline'
import WordCount from '../analysisComponents/wordCount'
import Details from '../components/details'
import Summary from '../analysisComponents/summary'
import Sentiment from '../analysisComponents/sentiment'

class Comparison extends React.Component {


    render () {
      return (
        <div >
          <Header />
          <Headline />

          <div>
            <WordCount switch="2"/>
            <WordCount switch="3"/>
          </div>

          <div className="metaSummaryHolder">
            <div className="mainInnerSummaryHolder"><Summary switch="2"/></div>
            <div className="mainInnerSummaryHolder"><Summary switch="3"/></div>
          </div>

          <div className="metaSentimentHolder">
            <div className="mainInnerSentimentHolder"><Sentiment switch="2"/></div>
            <div className="mainInnerSentimentHolder"><Sentiment switch="3"/></div>
          </div>

          <Details />
        </div>
      )
    }
}

export default Comparison;
