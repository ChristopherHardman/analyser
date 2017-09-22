import React from 'react';
import './searchbox.css';

class Searchbox extends React.Component {

constructor(props) {
  super(props);
}

state = {
  input: '',
}

inputChanged = (event) => {
  // called when input[id=title] changes its value
  this.setState({
    input: event.target.value
  })
  console.log('VALUE', this.state.input)
}


getData = () => {
const searchParams = new URLSearchParams();
searchParams.append('key', '37bc84eb8886f5410c62335d9f653e8d');
searchParams.append('lang', 'en');
searchParams.append('txt', this.state.input);
return fetch('http://api.meaningcloud.com/sentiment-2.1',  {
  method: 'POST',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
  },
  body: searchParams
})
.then(response => response.json())
.then(response => console.log(response))
}

    render () {
      return (
        <div className="searchboxHolder">
          <input type="text" placeholder="Add website address here..." onChange={this.inputChanged} value={this.state.input} />
          <button onClick={this.getData}>Create</button>
        </div>
      )
    }

}

export default Searchbox;
