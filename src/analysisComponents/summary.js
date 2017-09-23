import React from 'react';
import './summary.css';
import { connect } from 'react-redux';

class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.getDataSummarise();
  }

//gets article summary from the API. Can change sumary length through sentence number.
  getDataSummarise = () => {

    const searchParams = new URLSearchParams();
    searchParams.append('key', '37bc84eb8886f5410c62335d9f653e8d');
    searchParams.append('lang', 'en');
    searchParams.append('url', this.props.search.input);
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
          console.log('SUMMARY', response)
          this.props.addSummary(response);
    })

  }

getSummary() {
  let sum = this.props.summary.summary;
    if (sum !== undefined) {
      let res = [];
      let sum1 = sum.split('. ');
      for (var i = 0; i < sum1.length; i++) {
        res.push(
          <li>{sum1[i]}</li>
        )
      }
      return res
      // return <div>{sum}</div>
  }
}

render () {
  return (
    <div>
      <h2>Summary</h2>
      <div className="summaryHolder">{this.getSummary()}</div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    summary: state.summary,
    search: state.search
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
