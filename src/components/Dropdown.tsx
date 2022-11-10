import React, { useState } from "react"
import { Link } from "react-router-dom"
import { MenuItems } from "../data/MenuItems"
import "../styles/nav.css"

export default function Dropdown() {
  const [click, setClick] = useState(false)
  const handleClick = () => {
    setClick(!click)
  }

  return (
    <>
        <ul
          onClick={handleClick}
          className={click ? "dropdown-menu clicked" : "dropdown-menu"}
        >
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className={item.className}
                  to={item.path}
                  onClick={() => setClick(false)}
                >
                  {item.title}
                </Link>
              </li>
            )
          })}
        </ul>
    </>
  )
}
