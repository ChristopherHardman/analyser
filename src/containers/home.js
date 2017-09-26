import React from 'react';
import Header from '../components/header'
import Searchbox from '../components/searchbox'
import Details from '../components/details'
import Headline from '../components/headline'
import Switch from '../components/switch'
import Progress from '../components/progress'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './home.css';

class Home extends React.Component {
    render () {
      return (
         <MuiThemeProvider>
        <div className="homeHolder">
          <Header />
          <Headline />
          <Switch />
          <Searchbox />
          <div className="detailsHolder"><Details /></div>
        </div>
          </MuiThemeProvider>
      )
    }
}

export default Home;
