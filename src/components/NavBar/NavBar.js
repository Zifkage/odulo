import React from 'react';

const NavBar = () => (
  <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dar">
    <div className="container">
      <a className="navbar-brand" href="">Odulo</a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="">Chat</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">Link</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavBar;