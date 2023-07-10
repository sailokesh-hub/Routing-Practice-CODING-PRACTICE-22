// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

function Header() {
  return (
    <div className="header">
      <div className="page-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="logo"
        />
        <h2>Wave</h2>
      </div>
      <div>
        <ul className="nav-bar">
          <li className="li">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="li">
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li className="li">
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
