import React from 'react';
import Header from '../components/header'
import Headline from '../components/headline'
import DoubleSearch from '../components/doubleSearch'
import Details from '../components/details'


class Home extends React.Component {
    render () {
      return (
        <div>
        <Header />
        <Headline />
        <DoubleSearch />
        <Details />
        </div>
      )
    }
}

export default Home;
