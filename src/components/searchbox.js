import React from 'react';
import './searchbox.css';
import { connect } from 'react-redux';

class Searchbox extends React.Component {

state = {
  input: '',
}

inputChanged = (event) => {
  // called when input[id=title] changes its value
  this.setState({
    input: event.target.value
  })
}

clickHandler = () => {
  if (!this.state.input){
    alert("no input detected")
    } else {
        console.log('INPUT', this.state)
        this.props.addSearch(this.state)
    }
}

    render () {
      return (
        <div className="searchboxHolder">
          <input type="text" placeholder="Add website address here..." onChange={this.inputChanged} value={this.state.input} />
          <button onClick={this.clickHandler}>Create</button>
        </div>
      )
    }
}

// const mapStateToProps = (state) => {
//   return {
//     summary: state.summary
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    addSearch: (state) => dispatch({
      type: 'ADD_SEARCH',
      state
    })
  }
}

export default connect(null, mapDispatchToProps) (Searchbox);
