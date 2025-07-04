import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage/LandingPage"
import Waitlist from "./pages/waitlist-form"
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/waitlist" element={<Waitlist />} />
        {/* Add more routes here if needed */}
      </Routes>
    </Router>
  )
}
