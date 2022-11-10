import React from "react"
import { Route, Routes } from "react-router-dom"
import "./App.css"
import About from "./pages/About"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  )
}

export default App
