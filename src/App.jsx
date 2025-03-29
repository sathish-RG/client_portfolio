import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navebar from './components/navbar'
import MainPage from './components/mainPage'

const App = () => {
  return (
    <Router>
    <Navebar/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
      </Routes>
    </Router>
  )
}

export default App