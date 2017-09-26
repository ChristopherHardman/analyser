import React from 'react';
import './doubleSearch.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter} from 'react-router-dom';
import Progress from './progress'


class DoubleSearch extends React.Component {

state = {
  input2: '',
  input3: '',
  redirect: false,
  submit: false
}

clickHandler2 = (e) => {
  e.preventDefault();
  if (!this.state.input2 || !this.state.input3){
    alert("Insufficient inputs detected")
    } else {
        this.props.addSearchDouble(this.state);
        this.setState({submit:true});                             //used to render progress bar
        setTimeout(() => this.setState({redirect: true}), 15000); //need to pass function as a callback
    }
}

inputChanged2 = (event) => {
  // called when input[id=title] changes its value
  this.setState({
    input2: event.target.value
  })
}

inputChanged3 = (event) => {
  // called when input[id=title] changes its value
  this.setState({
    input3: event.target.value
  })
}

render () {
  if (!this.state.redirect && !this.state.submit) {
  return (
    <div className="searchboxHolder2">
      <div className="inputHolder">
        <input className="input2" type="text" placeholder="Add first website address here..." onChange={this.inputChanged2} value={this.state.input2} />
        <input className="input2" type="text" placeholder="Add second website address here..." onChange={this.inputChanged3} value={this.state.input3} />
      </div>
      <button className="button2" onClick={this.clickHandler2}>Compare</button>
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
  <Redirect to="/comparison" />
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
    addSearchDouble: (search2) =>
    {
      dispatch({
      type: 'ADD_SEARCH_DOUBLE',
      search2
    })
  }}
}

export default connect (mapStateToProps, mapDispatchToProps) (DoubleSearch);
