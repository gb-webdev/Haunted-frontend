import React, { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import mockUsers from './pages/mockUsers.js'
import mockItems from './pages/mockItems.js'
import Header from './components/Header.js'
import Items from './pages/ItemNew.js'
import ProtectedIndex from './pages/ProtectedIndex.js'
import './App.css'

const App = () => {

  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [items, setItems] = useState(mockItems)

  return (
    <>
      <div className="App-container">
        <Routes>
          <Route path='/' element={<Header /> } />
          <Route path='/items' element={<Items /> } />
          {currentUser && (
            <Route path="/myItems" element={<ProtectedIndex items={items} currentUser={currentUser} /> } />
          )}
        </Routes>
      </div>
    </>
  )
}

export default App
