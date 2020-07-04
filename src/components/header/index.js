import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../../images/logo-designcode.svg"
import "./index.css"

const Header = ({ siteTitle }) => (
  <header className="Header">
    <div className="HeaderGroup">
      <Link to="/">
        <img src={logo} width="30" alt="Design+Code 3" />
      </Link>
      <Link to="/courses">Courses</Link>
      <Link to="/downloads">Downloads</Link>
      <Link to="/workshops">Workshops</Link>
      <Link to="/buy">
        <button>Buy</button>
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
