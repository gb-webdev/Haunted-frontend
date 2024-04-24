import React, { useState, useEffect } from 'react'
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

  const [currentUser, setCurrentUser] = useState([])
  const [items, setItems] = useState([])

  const login = (userInfo) => {
    console.log('login invoked')
    setCurrentUser(mockUsers[0])
  }

  const signup = (userInfo) => {
    fetch('http://localhost:3000/signup', {
      body: JSON.stringify(userInfo),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
    })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      localStorage.setItem('token', response.headers.get('Authorization'))
      return response.json()
    })
    .then((payload) => {
      setCurrentUser(payload)
    })
    .catch((error) => console.log('signup errors: ', error))
  }

  const logout = () => {
    setCurrentUser(null)
  }

  useEffect(() => {
    readItem()
  }, [])

  const createItem = () => {
    console.log('createItem invoked')
  }

  const url = 'http://localhost:3000'

  const readItem = () => {
    fetch(`${url}/items`)
    .then(response => response.json())
    .then(payload => {
      setItems(payload)
    })
    .catch(error => console.log(error))
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
            <Route path='/signup' element={<SignUp signup={signup} />} />
            </>
          )}
        </Routes>
      </div>
    </>
  )
}

export default App
