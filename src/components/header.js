import React from 'react';
import './header.css';

class Header extends React.Component {
    render () {
      return (
        <div className="headerHolder">
          <a className="headerLink" href="/">CrowdSorcerer</a>
        </div>
      )
    }

}

export default Header;
