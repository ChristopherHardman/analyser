import React from 'react';
import './wordCount.css';
import { connect } from 'react-redux';

class WordCount extends React.Component {
  constructor(props) {
    super(props);
    this.getDataConcepts();
  }


//Gets summary of concepts from the API
getDataConcepts = () => {
    console.log('GetConcepts Fired');
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






getWatson = () => {
        var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
        var natural_language_understanding = new NaturalLanguageUnderstandingV1({
          'username': '874708dc-bc4a-4bc1-b18c-f955795228eb',
          'password': 'ufpsegTsKYch',
          'version_date': '2017-02-27'
        });

        var parameters = {
          'text': 'IBM is an American multinational technology company headquartered in Armonk, New York, United States, with operations in over 170 countries.',
          'features': {
            'entities': {
              'emotion': true,
              'sentiment': true,
              'limit': 2
            },
            'keywords': {
              'emotion': true,
              'sentiment': true,
              'limit': 2
            }
          }
        }

        natural_language_understanding.analyze(parameters, function(err, response) {
          if (err)
            console.log('error:', err);
          else
            console.log(JSON.stringify(response, null, 2));
        });

    }

getConcepts () {
  let temp = this.props.concepts.concept_list;
  let res = [];
  if (temp !== undefined){
  for (var i = 0; i < temp.length; i++) {
    res.push(temp[i]['form']+ ' - ');
  }
  return res.sort();
  }
  }

getEntities () {
  let temp = this.props.concepts.entity_list;
  let res = [];
  if (temp !== undefined){
  for (var i = 0; i < temp.length; i++) {
    res.push(temp[i]['form']+ ' - ');
  }
  return res.sort();
  }
  }

getBubbles() {
  let sum = [{Computer: 9}, {Printer: 8}, {Mouse:7}, {Screen: 7}, {Keyboard: 5}, {Modem: 4}, {Server: 3}, {Data: 1}];
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
        <div className="frequency">
            <div className="textHolder">
            <div className="conceptHolder"><h3>Concepts</h3>{this.getConcepts()}</div>
            <div className="entityHolder"><h3>Entitites</h3>{this.getEntities()}</div>
            </div>
            <div className="bubbleHolder">
              <h3>Key Themes</h3>
                <div className="innerBubbleHolder">{this.getBubbles()}</div>
                </div>

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
