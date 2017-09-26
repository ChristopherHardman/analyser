import React from 'react';
import './comparison.css';
import { connect } from 'react-redux'
import Header from '../components/header'
import Headline from '../components/headline'
import WordCount from '../analysisComponents/wordCount'
import Details from '../components/details'
import Summary from '../analysisComponents/summary'
import Sentiment from '../analysisComponents/sentiment'
import Progress from '../components/progress'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



class Analysis extends React.Component {
    render () {
      // if (this.props.sentiment.score_tag === undefined) return (
      //   <MuiThemeProvider>
      //     <div>
      //     <Header />
      //     <Headline />
      //     <Progress />
      //     <Details />
      //     </div>
      //   </MuiThemeProvider>
      // );
      // else {
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
// }

const mapStateToProps = (state) => {
  return {
    sentiment: state.sentiment,

  }
}

export default connect(mapStateToProps, null)  (Analysis);
