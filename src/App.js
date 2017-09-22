import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import './city-of-london_gal.jpg';


//Import containers
import Home from './containers/home'
import Home2 from './containers/home2'
import Analysis from './containers/analysis'

class App extends Component {
  render() {
    return (
      <Router>
       <div>
         <ul>
           <li><Link to="/">Home</Link></li>
           <li><Link to="/compare">Compare</Link></li>
           <li><Link to="/analysis">Analysis</Link></li>
         </ul>
         <Route exact path="/" component={Home}/>
         <Route path="/compare" component={Home2}/>
         <Route path="/analysis" component={Analysis}/>

       </div>
      </Router>
    )
  }
}

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.getData();
//   }
//
//   getData = () => fetch('http://api.meaningcloud.com/sentiment-2.1',  {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/x-www-form-urlencoded',
//     },
//     data: JSON.stringify({
//       key: '37bc84eb8886f5410c62335d9f653e8d',
//       lang: 'en',
//       txt: 'The restaurant is really great and worth the money'
//     })
//     })
//   .then(response => response.json())
//   .then(response => console.log(response))
  //
  //
  // const Output = () => (
  //   <Router>
  //    <div>
  //      <ul>
  //        <li><Link to="/">Home</Link></li>
  //        <li><Link to="/analysis">Analysis</Link></li>
  //      </ul>
  //      <Route exact path="/" component={Headline}/>
  //      <Route path="/topics" render={()=> <h3>hi</h3>}/>
  //    </div>
  //   </Router>
  // )


//
//   render() {
//     return (
//       <div className="App">
//           <Header />
//           <Headline />
//           <Searchbox />
//           <DoubleSearch />
//           <Details />
//       </div>
//     );
//   }
// }

export default App;
