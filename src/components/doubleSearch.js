import React from 'react';
import './doubleSearch.css';

class DoubleSearch extends React.Component {
    render () {
      return (
        <div className="searchboxHolder2">
          <div className="inputHolder">
          <input className="input2" type="text" placeholder="Add first website address here..." />
          <input className="input2" type="text" placeholder="Add second website address here..." />
          </div>
          <button className="button2">Create</button>
        </div>
      )
    }
}

export default DoubleSearch;
