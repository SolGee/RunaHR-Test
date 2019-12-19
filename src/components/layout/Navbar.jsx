import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/ghibli-logo.svg';

class Navbar extends Component {
  render() {
    return (
      <header>
        <nav>
          <Link to='/'>
            <figure>
              <img src={logo} alt='studio ghibli logo' />
            </figure>
          </Link>
          <Link to='/favorites'>
            <i className='material-icons'>favorite</i>
            <p> Mis favoritas</p>
          </Link>
        </nav>
      </header>
    );
  }
}

export default Navbar;
