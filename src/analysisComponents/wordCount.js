import React from 'react';
import './wordCount.css';
import { connect } from 'react-redux';

class WordCount extends React.Component {
  constructor(props) {
    super(props);
  }

componentDidUpdate = () => {
    this.getDataConcepts();
  }

//Gets summary of concepts from the API
getDataConcepts = () => {
    const searchParams = new URLSearchParams();
      searchParams.append('key', '37bc84eb8886f5410c62335d9f653e8d');
      searchParams.append('lang', 'en');
      searchParams.append('url', this.props.search.input);
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
          this.props.addConcepts(response);
         })
        }

getConcepts () {
  let temp = this.props.concepts.concept_list;
  let res = [];
  if (temp !== undefined){
  for (var i = 0; i < temp.length; i++) {
    res.push(temp[i]['form']+ ' - ');
  }
  return res;
  }
  }

  getEntities () {
    let temp = this.props.concepts.entity_list;
    let res = [];
    if (temp !== undefined){
    for (var i = 0; i < temp.length; i++) {
      res.push(temp[i]['form']+ ' - ');
    }
    return res;
    }
    }

    getBubbles() {
      let sum = [{Computer: 8}, {Printer: 9}, {Mouse:1}, {Screen: 6}, {Keyboard: 5}, {Modem: 2}];
      let colors = ['red', 'yellow', 'green', 'blue', 'orange', 'purple', 'black'];
        if (sum !== undefined) {
          let res = [];
          for (var i = 0; i < sum.length; i++) {
            res.push(
              <div className="bubble" style={
                {width:sum[i][Object.keys(sum[i])]*20,
                  height: sum[i][Object.keys(sum[i])]*20,
                  background: colors[Math.floor(Math.random() * colors.length)]}}><p className="label">{Object.keys(sum[i])} : {sum[i][Object.keys(sum[i])]}</p></div>
            )
          }
          return res
          // return <div>{sum}</div>
      }
    }

render () {
  return (
    <div className="BubbleContainer">
      <h2 className="WordCountTitle">Word Frequency</h2>
        <div className="Frequency">
            <div className="conceptHolder"><h3>Concepts</h3>{this.getConcepts()}</div>
            <div className="entityHolder"><h3>Entitites</h3>{this.getEntities()}</div>
            <div className="bubbleHolder"><h3>Bubbles</h3><div className="innerBubbleHolder">{this.getBubbles()}</div></div>

        </div>
    </div>
      )
    }
}


const mapStateToProps = (state) => {
  return {
    concepts: state.concepts,
    search: state.search
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addConcepts: (concepts) => dispatch({
      type: 'ADD_CONCEPTS',
      concepts
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)  (WordCount);
