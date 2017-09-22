import React from 'react';
import Header from '../components/header'
import Searchbox from '../components/searchbox'
import Details from '../components/details'
import Headline from '../components/headline'
import Switch from '../components/switch'

class Home extends React.Component {
    render () {
      return (
        <div>
          <Header />
          <Headline />
          <Switch />
          <Searchbox />
          <Details />
        </div>
      )
    }
}

export default Home;
