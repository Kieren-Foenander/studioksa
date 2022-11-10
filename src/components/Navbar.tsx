import React, { useState, useEffect } from "react"
import "../styles/nav.css"
import logo from "../assets/logo.webp"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTimes,
  faBars,
  faCaretDown,
  faCaretLeft,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons"
import Dropdown from "./Dropdown"

export default function Navbar() {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 960) {
        setMobile(true)
      } else {
        setMobile(false)
      }
    }

    window.addEventListener("resize", handleResize)
  }, [window.innerWidth])

  const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const [mobile, setMobile] = useState(false)

  const toggleHamburger = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(true)
    }
  }

  const onMouseLeave = () => {
    setDropdown(false)
  }

  return (
    <>
      <nav className="navbar">
        <div>
          <Link to="/" className="logo">
            <img src={logo} />
            <h1 className="logo-title">Studio&nbsp;KSA</h1>
          </Link>
        </div>
        <div onClick={toggleHamburger}>
          <FontAwesomeIcon
            icon={click ? faTimes : faBars}
            className="menu-icon"
          ></FontAwesomeIcon>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/About" className="nav-links" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/Packages"
              className={dropdown ? "nav-links-sticky" : "nav-links"}
              onClick={closeMobileMenu}
            >
              Packages{" "}
              {!mobile && (
                <FontAwesomeIcon icon={dropdown ? faCaretDown : faCaretRight} />
              )}
            </Link>
            {dropdown && <Dropdown />}
          </li>

          <li className="nav-item">
            <Link to="/Reviews" className="nav-links" onClick={closeMobileMenu}>
              Reviews
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Contact" className="nav-links" onClick={closeMobileMenu}>
              Contact&nbsp;Me
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Blog" className="nav-links" onClick={closeMobileMenu}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
