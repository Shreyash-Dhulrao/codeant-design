import React from 'react'
import Sidebar from './Components/Sidebar'
import Homepage from './Components/Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<><Sidebar /><Homepage /></>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
