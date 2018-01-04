import React, { Component } from 'react';
// import Navbar from './navbar.js';

class Navbar extends Component {
  render() {
    return (

      <div className="container">
          <nav className="navbar navbar-fixed navbar-toggleable-md">

              <button className="navbar-toggler navbar-toggler-right custom-toggler" type="button" data-toggle="collapse" data-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">

              </button>

              <a className="navbar-brand" href="">
                  <img src="./img/blockLab-logo.png" className="img-fluid" width="200px;" alt=""/>
              </a>
              <div className="collapse navbar-collapse" id="main-nav">
                  <ul className="navbar-nav ml-auto homepage">
                      <li className="nav-item">
                          <a className="nav-link" href="./projects/defence-zone.html">Projects</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="./partners.html">Partners</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="./contact-us.html">Contact Us</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="http://auxledger.com/" target="_blank">Auxledger </a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="https://auxesisgroup.com/" target="_blank">Auxesis Group</a>
                      </li>
                  </ul>
              </div>
          </nav>
      </div>
    );
  }
}

export default Navbar;
