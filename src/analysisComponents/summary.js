import React from 'react';
import './summary.css';
import { connect } from 'react-redux';

class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.getDataSummarise();
  }

// componentDidUpdate = () => {
//   this.getDataSummarise();
// }

//gets article summary from the API. Can change sumary length through sentence number.
  getDataSummarise = () => {
      console.log('Summary Fired');
      let target = this.props.search.input;
      if (this.props.switch ==="2") target = this.props.search2;
      if (this.props.switch ==="3") target = this.props.search3;
      console.log('switch', this.props.switch, target)
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
          console.log('SUMMARY', response)
          this.props.addSummary(response);
    })

  }



getSummary() {
  let sum = this.props.summary.summary;
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
      <h2>Summary</h2>
      <div className="summaryHolder">{this.getSummary()}</div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    summary: state.summary,
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
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)  (Summary);
