import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import './city-of-london_gal.jpg';


//Import components
import Header from './components/header'
import Searchbox from './components/searchbox'
import Details from './components/details'
import Headline from './components/headline'
import DoubleSearch from './components/doubleSearch'
import WordCount from './analysisComponents/wordCount'


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
         <Route exact path="/" component={Header}/>
         <Route exact path="/" component={Headline}/>
         <Route exact path="/" component={Searchbox}/>

         <Route path="/analysis" component={WordCount}/>
         <Route path="/compare" component={DoubleSearch}/>
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
