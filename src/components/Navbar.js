import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.css';
const Navbar = () => {
  return (
    <header className="nav">
      <Link to="/">
        <div className="logo">Queue System</div>
      </Link>

      <nav>
        <ul className="nav-links">
          <li className="nav-link">
            <Link to="/">Processes</Link>
          </li>
          <li className="nav-link">
            <Link to="/login">Login</Link>
          </li>
          <li className="nav-link">
            <Link to="/admin">admin</Link>
          </li>
          <li className="nav-link">
            <Link to="/queue">queue</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
