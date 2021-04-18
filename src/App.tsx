import React from "react"
import { BrowserRouter as Router } from "react-router-dom"

import Layout from "./components/Layout"
import NavBar from "./components/NavBar"

export default function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Layout />
      </Router>
    </div>
  )
}
