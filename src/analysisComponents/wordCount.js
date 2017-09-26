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
  if (this.props.switch ==="2") temp = this.props.concepts2.concept_list;
  if (this.props.switch ==="3") temp = this.props.concepts3.concept_list;
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
  if (this.props.switch ==="2") temp = this.props.concepts2.entity_list;
  if (this.props.switch ==="3") temp = this.props.concepts.entity_list;
  let res = [];
  if (temp !== undefined){
  for (var i = 0; i < temp.length; i++) {
    res.push(temp[i]['form']+ ' - ');
  }
  return res.sort();
  }
  }

getBubbles() {
  let temp = this.props.concepts.entity_list;
  if (temp !== undefined) {
  let temp1 = temp.slice(0,9).map((arr)=> arr.form);
  let colors = ['#bd4428', '#dc735b', '#d55639', '#977d78', '#c8c2c1', '#393432', '#681603', '#992005'];
  let res = [];
  for (var i = 0; i < temp1.length; i++) {
      let randNum = Math.round(Math.random()*10);
      res.push(
        <div className="bubble" style={
          {width:randNum*20,
            height: randNum*20,
            background: colors[Math.floor(Math.random() * colors.length)]}}><p className="label">{temp1[i]}</p></div>
      )
    }
    return res
    }
  }


//
// let temp2 = [];
// temp1.map(elem => {
//   let randNum = Math.round(Math.random()*10);
//   temp2.push({elem : randNum})
// });
// console.log('TEMP', temp2);


//   let sum = [{Computer: 9}, {Printer: 8}, {Mouse:7}, {Screen: 7}, {Keyboard: 5}, {Modem: 4}, {Server: 3}, {Data: 1}];
//   let colors = ['#bd4428', '#dc735b', '#d55639', '#977d78', '#c8c2c1', '#393432', '#681603', '#992005'];
//     if (sum !== undefined) {
//       let res = [];
//       for (var i = 0; i < sum.length; i++) {
//         res.push(
//           <div className="bubble" style={
//             {width:sum[i][Object.keys(sum[i])]*20,
//               height: sum[i][Object.keys(sum[i])]*20,
//               background: colors[Math.floor(Math.random() * colors.length)]}}><p className="label">{Object.keys(sum[i])} : {sum[i][Object.keys(sum[i])]}</p></div>
//         )
//       }
//       return res
//       // return <div>{sum}</div>
//   }
// }

render () {
  let search = '';
  if (this.props.search.input !== 'undefined') search = this.props.search.input;
  if (this.props.switch ==="2" && typeof  this.props.search2 !=='object') search = this.props.search2;
  if (this.props.switch ==="3" && typeof this.props.search3 !=='object') search = this.props.search3;
  console.log('SEARCH', search)
  return (
    <div className="BubbleContainer">
        <div className="frequency">
            <div className="searchIndicator">Displaying analysis for: {search}</div>
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
    concepts2: state.concepts2,
    concepts3: state.concepts3,
    search: state.search,
    search2: state.search2,
    search3: state.search3
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
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

export default connect(mapStateToProps, mapDispatchToProps)  (WordCount);
