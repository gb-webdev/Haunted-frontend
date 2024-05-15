import React, { useState, useEffect } from 'react'
import {Route, Routes} from 'react-router-dom'
import Header from './components/Header.js'
import SignUp from './pages/SignUp.js'
import SignIn from './pages/SignIn.js'
import ItemIndex from './pages/ItemIndex.js'
import ItemNew from './pages/ItemNew.js'
import ProtectedIndex from './pages/ProtectedIndex.js'
import ErrorPage from './pages/ErrorPage.js'
import './App.css'

const App = () => {

  const [currentUser, setCurrentUser] = useState([])
  const [items, setItems] = useState([])

  const url = 'http://localhost:3000'

  useEffect(() => {
    readItem()
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser))
    }
  }, [])

  const login = (userInfo) => {
    fetch(`${url}/login`, {
      body: JSON.stringify(userInfo),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
    })
    .then(response => {
      if(!response.ok) {
        throw Error(response.statusText)
      }
      localStorage.setItem('token', response.headers.get('Authorization'))
      return response.json()
    })
    .then(payload => {
      localStorage.setItem('user', JSON.stringify(payload))
      setCurrentUser(payload)
    })
    .catch(error => console.log('login errors: ', error))
  }

  const signup = (userInfo) => {
    fetch(`${url}/signup`, {
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
    fetch(`${url}/logout`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      method: 'GET',
    })
    .then(payload => {
      setCurrentUser(null)
      localStorage.removeItem('token')
      localStorage.removeItem('user')
    })
    .catch(error => console.log('logout errors: ', error))
  }

  const createItem = (newItem) => {
    fetch(`${url}/items`, {
      body: JSON.stringify(newItem),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
    .then(response => response.json())
    .then(() => readItem())
    .catch(errors => console.log('createItem errors: ', errors))
  }

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
            <Route path="/myitems" element={<ProtectedIndex deleteItem={deleteItem} items={items} readItem={readItem} currentUser={currentUser} />} />
          )}
          {!currentUser && (
            <>
            <Route path='/login' element={<SignIn login={login} />} />
            <Route path='/signup' element={<SignUp signup={signup} />} />
            </>
          )}
          <Route path='*' elemt={ErrorPage} />
        </Routes>
      </div>
    </>
  )
}

export default App
