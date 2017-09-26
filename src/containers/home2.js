import React from 'react';
import Header from '../components/header'
import Headline from '../components/headline'
import DoubleSearch from '../components/doubleSearch'
import Details from '../components/details'
import Switch from '../components/switch'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './home2.css';

class Home extends React.Component {
    render () {
      return (
        <MuiThemeProvider>
        <div className="homeHolder">
          <Header />
          <Headline />
          <Switch />
          <DoubleSearch />
          <Details />
        </div>
        </MuiThemeProvider>
      )
    }
}

export default Home;
