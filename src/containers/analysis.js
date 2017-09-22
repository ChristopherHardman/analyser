import React from 'react';
import './analysis.css';
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
          <Summary />
          <Sentiment />
          <Details />
        </div>
      )
    }
}

export default Analysis;
