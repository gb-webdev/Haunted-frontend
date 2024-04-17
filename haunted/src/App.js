import React, { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import mockUsers from './pages/mockUsers.js'
import mockItems from './pages/mockItems.js'
import Header from './components/Header.js'
import Items from './pages/ItemNew.js'
import './App.css'

const App = () => {

  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [mockItems, setMockItems] = useState(mockItems)

  return (
    <div className="App-container">
      <Routes>
        <Route path='/' element={<Header /> } />
        <Route path='/' element={<Items /> } />
      </Routes>
    </div>
  )
}

export default App
