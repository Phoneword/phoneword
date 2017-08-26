import React, { Component } from 'react'
import { Link } from 'react-router'
import { HiddenOnlyAuth, VisibleOnlyAuth } from './util/wrappers.js'

// UI Components
import LoginButtonContainer from './user/ui/loginbutton/LoginButtonContainer'
import LogoutButtonContainer from './user/ui/logoutbutton/LogoutButtonContainer'

// Styles
import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

class App extends Component {
  render() {
    const OnlyAuthLinks = VisibleOnlyAuth(() =>
      <span>
        <li className="pure-menu-item">
          <Link to="/dashboard" className="pure-menu-link">Dashboard</Link>
        </li>
        <li className="pure-menu-item">
          <Link to="/profile" className="pure-menu-link">Profile</Link>
        </li>
        <LogoutButtonContainer />
      </span>
    )

    const OnlyGuestLinks = HiddenOnlyAuth(() =>
      <span>
        <li className="pure-menu-item">
          <Link to="/signup" className="pure-menu-link">Sign Up</Link>
        </li>
        <LoginButtonContainer />
      </span>
    )

    return (
      <div className="App">
        <div className="navbar pure-menu pure-menu-horizontal remove-flex">
          <Link to="/" className="pure-menu-heading pure-menu-link">PHONEWORD</Link>
          <ul className="pure-menu-list navbar-right">
            <OnlyGuestLinks />
            <OnlyAuthLinks />
          </ul>
        </div>
        

        {this.props.children}

        {/*sidebar, TODO this should be moved into a logged in only view*/}
        <div className="nav-side-menu">
          {/*<div className="brand">PHONEWORD</div>*/}
            <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
          <div className="menu-list">
            <ul id="menu-content" className="menu-content collapse out">
              <li>
                <a href="#">
                  <i className="fa fa-dashboard fa-lg"></i> Dashboard
                </a>
              </li>
              <li data-toggle="collapse" data-target="#products" className="collapsed active">
                <a href="#"><i className="fa fa-phone fa-lg"></i> Connect to Peer <span className="arrow"></span></a>
              </li>
              <ul className="sub-menu collapse" id="products">
                <li className="active"><a href="#">Dialer</a></li>
                <li><a href="#">Lookup</a></li>                  
              </ul>
              <li data-toggle="collapse" data-target="#service" className="collapsed">
                <a href="#"><i className="fa fa-globe fa-lg"></i> Services <span className="arrow"></span></a>
              </li>
              <ul className="sub-menu collapse" id="service">
                <li>Register PHONEWORD</li>
              </ul>
              <li data-toggle="collapse" data-target="#new" className="collapsed">
                  <a href="#"><i className="fa fa-folder fa-lg"></i> Storage <span className="arrow"></span></a>
              </li>
              <ul className="sub-menu collapse" id="new">
                <li>Add file to IPFS</li>
                <li>Record Video</li>
              </ul>
              <li data-toggle="collapse" data-target="#wallet" className="collapsed">
                  <a href="#"><i className="fa fa-bitcoin fa-lg"></i> Wallet <span className="arrow"></span></a>
              </li>
              <ul className="sub-menu collapse" id="wallet">
                <li ><button type="button" onClick="watchBalance();" className="inheritButton">Get Balance</button></li>
                <li>Send Ethereum</li>
                <li>Request Ethereum</li>
              </ul>
              <li>
                <a href="#">
                  <i className="fa fa-user fa-lg"></i> Identity
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-users fa-lg"></i> Users
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/*end side bar*/}
      </div>
    );
  }
}

export default App
