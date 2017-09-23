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
  if (temp !== undefined) console.log('TEMP', temp[0]['form']);
  // let res = [];
  // for (let i = 0; i < temp.length; i++){
  // res.push(temp[i].form)
  // }
  // return res;
  }






render () {
  return (
    <div className="BubbleContainer">
      <h2 className="WordCountTitle">Word Frequency</h2>
        <div className="Frequency">
          <div></div>
            <div className = "circle"></div>
            <div className = "circle1"></div>
            <div className = "circle2"></div>
            <div>{this.getConcepts()}</div>
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
