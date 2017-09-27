import React from 'react';
import './searchbox.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Progress from './progress'


class Searchbox extends React.Component {

state = {
  input: '',
  redirect: false,
  submit: false,
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
        this.setState({submit:true});
        this.setState({redirect: true});
    }
}

buttonClick = (e) => {
  if (e.keyCode === 13) this.clickHandler(e);
}

render () {

  if (!this.state.redirect && !this.state.submit) {
  return (
    <div className="searchboxHolder">
      <input type="text" placeholder="Add website address here..."
        onChange={this.inputChanged} value={this.state.input} onKeyDown={this.buttonClick}/>
      <button onClick={this.clickHandler}>Submit</button>
    </div>
    )
  }

  if (!this.state.redirect && this.state.submit) {
    return (
      <div className="progressHolder">
      <Progress />
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
      dispatch({
      type: 'ADD_SEARCH',
      search

    })
  }}
}

export default connect(mapStateToProps, mapDispatchToProps) (Searchbox);
