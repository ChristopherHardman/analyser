import React from 'react';
import './summary.css';
import { connect } from 'react-redux';

class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.getDataSummarise();
  }

  getDataSummarise = () => {
  const searchParams = new URLSearchParams();
  searchParams.append('key', '37bc84eb8886f5410c62335d9f653e8d');
  searchParams.append('lang', 'en');
  searchParams.append('url', 'https://en.wikipedia.org/wiki/Barcelona');
  searchParams.append('sentences', '5');
  return fetch('http://api.meaningcloud.com/summarization-1.0',  {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
    body: searchParams
  })
  .then(response => response.json())
  .then(response => {
    console.log('INITIAL', response)
    this.props.addSummary(response);
  })
}

getSummary() {
  let sum = this.props.summary.summary;
  if (sum !== undefined) {
      console.log('SUM', sum)
      return <div>{sum}</div>
  }
}


    render () {
      return (
        <div>
        <h2>Summary</h2>
        <div>{this.getSummary()}</div>
        </div>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    summary: state.summary
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addSummary: (summary) => dispatch({
      type: 'ADD_SUMMARY',
      summary
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)  (Summary);
