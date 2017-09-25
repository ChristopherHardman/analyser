import React from 'react';
import './analysis.css';
import Header from '../components/header'
import Headline from '../components/headline'
import WordCount from '../analysisComponents/wordCount'
import Details from '../components/details'
import Summary from '../analysisComponents/summary'
import Sentiment from '../analysisComponents/sentiment'

class Comparison extends React.Component {
  // constructor(props) {
  //   super(props);
  //
  //   props.compareSearches.forEach(search => {
  //     fetch(…)
  //     .then(// dispatch the sentiment and append the result)
  //   })
  // }
  //
  // renderSentiments() {
  //   return this.props.comparedSentiments(sentiment => {
  //     return <div className="innerSentimentHolder">
  //       <Sentiment sentiment={sentiment} />
  //     </div>
  //   })
  // }

    render () {
      return (
        <div>
          <Header />
          <Headline />
          <div>
            <WordCount />
            <WordCount />
          </div>
          <div className="summaryHolder">
            <div className="innerSummaryHolder"><Summary switch="2"/></div>
            <div className="innerSummaryHolder"><Summary switch="3"/></div>
          </div>
          <div className="sentimentHolder">
            <div className="innerSentimentHolder"><Sentiment /></div>
            <div className="innerSentimentHolder"><Sentiment /></div>
          </div>
          <Details />
        </div>
      )
    }
}

export default Comparison;
