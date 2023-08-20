import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import { Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Store/store'


const App = () => {
  return (
    <div className='App'>
      <Provider store={store}>  
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Provider>

    </div>
  )
}

export default App
