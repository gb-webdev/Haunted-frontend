import React, { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import mockUsers from './pages/mockUsers.js'
import mockItems from './pages/mockItems.js'
import Header from './components/Header.js'
import SignUp from './pages/SignUp.js'
import SignIn from './pages/SignIn.js'
import ItemIndex from './pages/ItemIndex.js'
import ItemNew from './pages/ItemNew.js'
import ProtectedIndex from './pages/ProtectedIndex.js'
import './App.css'

const App = () => {

  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [items, setItems] = useState(mockItems)

  const login = (userInfo) => {
    console.log('login invoked')
    setCurrentUser(mockUsers[0])
  }

  const logout = () => {
    setCurrentUser(null)
  }

  const createItem = () => {
    console.log('createItem invoked')
  }

  const url = 'http://localhost:3000'
  const readItem = () => {

  }
    
    const deleteItem = (id) => {
      fetch(`${url}/items/${id}`, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'DELETE'
      })
      .then((response) => response.json())
      .then(() => readItem())
      .catch((errors) => console.log('delete errors', errors))
    }

  return (
    <>
      <div className="App-container">
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/items' element={<ItemIndex items={items} />} />
          <Route path='/itemnew' element={<ItemNew createItem={createItem} currentUser={currentUser} />} />
          {currentUser && (
            <Route path="/myitems" element={<ProtectedIndex deleteItem={deleteItem} items={items} currentUser={currentUser} />} />
          )}
          {!currentUser && (
            <>
            <Route path='/login' element={<SignIn login={login} />} />
            <Route path='/signup' element={<SignUp />} />
            </>
          )}
        </Routes>
      </div>
    </>
  )
}

export default App
