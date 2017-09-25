import React from 'react';
import './searchbox.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter} from 'react-router-dom';


class Searchbox extends React.Component {
  constructor(props) {
    super(props);

  }

state = {
  input: '',
  redirect: false,
}

inputChanged = (event) => {
  // called when input[id=title] changes its value
  this.setState({
    input: event.target.value
  })
}

clickHandler = (e) => {
  e.preventDefault();
  if (!this.state.input){
    alert("no input detected")
    } else {
        console.log('INPUT', this.state);
        this.props.addSearch(this.state);
        setTimeout(this.setState({redirect: true}), 5000);
    }
}

render () {

  if (!this.state.redirect) {
  return (
    <div className="searchboxHolder">
      <input type="text" placeholder="Add website address here..." onChange={this.inputChanged} value={this.state.input} />
      <button onClick={this.clickHandler}>Submit</button>
    </div>
    )
  }
  return (
    <Redirect to="/analysis" />
  )
  }
}

const mapStateToProps = (state) => {
  return {
    search: state.search
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    addSearch: (search) =>
    {
      console.log('Hi')
      dispatch({
      type: 'ADD_SEARCH',
      search

    })
  }}
}

export default connect(mapStateToProps, mapDispatchToProps) (Searchbox);
