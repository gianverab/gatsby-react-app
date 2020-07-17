import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import logo from "../../images/logo-designcode.svg"
import "./index.css"

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = () => {
    const scrollTop = typeof window !== "undefined" && window.pageYOffset
    if (scrollTop > 50) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    typeof window !== "undefined" &&
      window.addEventListener("scroll", handleScroll)
  }, [scrolled])

  return (
    <header className={scrolled ? "Header HeaderScrolled" : "Header"}>
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
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
