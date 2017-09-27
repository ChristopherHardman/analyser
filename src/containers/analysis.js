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

  constructor(props) {
    super(props);
    this.getSentiment();
    this.getDataSummarise();
    this.getDataConcepts();
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

//gets article summary from the API. Can change summary length through sentence number.
  getDataSummarise = () => {
    console.log('GetSummarise Fired');
    let target = this.props.search.input;
    if (this.props.switch ==="2") target = this.props.search2;
    if (this.props.switch ==="3") target = this.props.search3;
    const searchParams = new URLSearchParams();
    searchParams.append('key', '37bc84eb8886f5410c62335d9f653e8d');
    searchParams.append('lang', 'en');
    searchParams.append('url', target);
    searchParams.append('sentences', '10');
    return fetch('http://api.meaningcloud.com/summarization-1.0',  {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        },
        body: searchParams
    })
    .then(response => response.json())
    .then(response => {
      if (this.props.switch ==="2") this.props.addSummary2(response);
      if (this.props.switch ==="3") this.props.addSummary3(response);
      this.props.addSummary(response);
      // hide loading indicator
    })
  }

getDataConcepts = () => {
  console.log('GetConcepts Fired');
  let target = this.props.search.input;
  if (this.props.switch ==="2") target = this.props.search2;
  if (this.props.switch ==="3") target = this.props.search3;
  console.log('GetConcepts Fired');
  console.log('SEARCH 2', this.props.search2);
  console.log('SEARCH 3', this.props.search3);
  const searchParams = new URLSearchParams();
    searchParams.append('key', '37bc84eb8886f5410c62335d9f653e8d');
    searchParams.append('lang', 'en');
    searchParams.append('url', target);
    searchParams.append('tt', 'a');
      return fetch('http://api.meaningcloud.com/topics-2.0',  {
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        },
        body: searchParams
      })
      .then(response => response.json())
      .then(response => {
        console.log('CONCEPTS', response)
        if (this.props.switch ==="2") this.props.addConcepts2(response);
        if (this.props.switch ==="3") this.props.addConcepts3(response);
        this.props.addConcepts(response);
       })
      }

    render () {
      if (this.props.sentiment.score_tag === undefined) return (
        <MuiThemeProvider>
          <div className="loadingView">
          <Header />
          <Headline />
          <div className="progressHolder">
          <Progress />
          </div>
          <Details />
          </div>
        </MuiThemeProvider>
      );
      else {
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
}

const mapStateToProps = (state) => {
  return {
    search: state.search,
    search2: state.search2,
    search3: state.search3,
    sentiment: state.sentiment,
    sentiment2: state.sentiment2,
    sentiment3: state.sentiment3,
    summary: state.summary,
    summary2: state.summary2,
    summary3: state.summary3,
    concepts: state.concepts,
    concepts2: state.concepts2,
    concepts3: state.concepts3,

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
    }),
    addSummary: (summary) => dispatch({
      type: 'ADD_SUMMARY',
      summary
    }),
    addSummary2: (summary) => dispatch({
      type: 'ADD_SUMMARY2',
      summary
    }),
    addSummary3: (summary) => dispatch({
      type: 'ADD_SUMMARY3',
      summary
    }),
    addConcepts: (concepts) => dispatch({
      type: 'ADD_CONCEPTS',
      concepts
    }),
    addConcepts2: (concepts) => dispatch({
      type: 'ADD_CONCEPTS2',
      concepts
    }),
    addConcepts3: (concepts) => dispatch({
      type: 'ADD_CONCEPTS3',
      concepts
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)  (Analysis);
