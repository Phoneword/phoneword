import React from 'react'

const SideNav = ({ onLogoutUserClick }) => {
  return(
    <div>   
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
            <li ><button type="button"  className="inheritButton">Get Balance</button></li>
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
  )
}

export default SideNav
