import React from 'react';
import './searchbox.css';

class Searchbox extends React.Component {
    render () {
      return (
        <div className="searchboxHolder">
          <input type="text" placeholder="Add website address here..." />
          <button>Create</button>
        </div>
      )
    }

}

export default Searchbox;
