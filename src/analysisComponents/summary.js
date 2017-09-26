import React from 'react';
import './summary.css';
import { connect } from 'react-redux';

class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.getDataSummarise();
  }

//gets article summary from the API. Can change summary length through sentence number.
  getDataSummarise = () => {
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
    })

  }

getSummary() {
  let sum = this.props.summary.summary;
  if (this.props.switch ==="2") sum = this.props.summary2.summary;
  if (this.props.switch ==="3") sum = this.props.summary3.summary;
    if (sum !== undefined) {
      let res = [];
      let sum1 = sum.split('. ');   //use map
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
    <div className="summaryMain">
      <h3>Summary</h3>
      <div className="summaryHolder">{this.getSummary()}</div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    summary: state.summary,
    summary2: state.summary2,
    summary3: state.summary3,
    search: state.search,
    search2: state.search2,
    search3: state.search3
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
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
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)  (Summary);
