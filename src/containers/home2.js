import React from 'react';
import Header from '../components/header'
import Headline from '../components/headline'
import DoubleSearch from '../components/doubleSearch'
import Details from '../components/details'
import Switch from '../components/switch'
import './home2.css';

class Home extends React.Component {
    render () {
      return (
        <div className="homeHolder">
          <Header />
          <Headline />
          <Switch />
          <DoubleSearch />
          <Details />
        </div>
      )
    }
}

export default Home;
