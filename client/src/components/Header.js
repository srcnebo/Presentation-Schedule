import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header-fallback">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark container">
      <Link className="navbar-brand" to="/">
        Integrify
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="link-items">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/presentations" className="link-items">
              Presentations
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/presentation/new" className="link-items">
              New Presentation
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
