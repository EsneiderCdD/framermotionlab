

import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar-container">
      <nav className="navbar-content">
        <NavLink to="/" className="navbar-logo">
          MotionLab
        </NavLink>

        <ul className="navbar-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/page2"
              className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}
            >
              Página 2
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar


