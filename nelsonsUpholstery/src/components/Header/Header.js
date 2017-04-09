import React, { Component } from 'react';
import './Header.css';

import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
          <div className='-header'>
              <div className='-top'>
                <div className='-mainLogo'>
                    <img src='../../../recycleLogo.png' alt='RecycleLogo' width='200px' height='230px' /> 
                    <img src='../../../mainLogo.png' alt='MainLogo' width='400px' height='250px'/> 
                </div>
                <div className='-phoneNumber'>604 940 2223</div>
              </div>
              <div className='-bottom'>
                <div className='-itemContainer'>
                    <div className='-item'>
                        <Link to='/'>Home</Link>
                    </div>
                    <div className='-item'>
                        <Link to='/about'>About</Link>
                    </div>
                    <div className='-item'>
                        <Link to='/gallery'>Gallery</Link>
                    </div>
                    <div className='-item'>
                        <Link to='/contact'>Contact</Link>
                    </div>
                    <div className='-item'>
                        <Link to='/suppliers'>Suppliers</Link>
                    </div>
                </div>
              </div>
          </div>
    );
  }
}


export default Header;
