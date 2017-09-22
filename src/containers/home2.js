import React from 'react';
import Header from '../components/header'
import Headline from '../components/headline'
import DoubleSearch from '../components/doubleSearch'
import Details from '../components/details'
import Switch from '../components/switch'

class Home extends React.Component {
    render () {
      return (
        <div>
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
