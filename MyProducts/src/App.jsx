import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Productpage from './pages/Productspage'
import Welcomepage from './pages/Welcomepage'
import AddProductPage from './pages/AddProductPage'


function App() {
  
  return (
    <Routes>
    <Route path ='/' element = {<Welcomepage />}/>
    <Route path ='/home' element = {<Homepage />}/>
    <Route path ='/products' element = {<Productpage />}/>
    <Route path= '/addproducts' element = {<AddProductPage/>}/>
    
    </Routes>
  )
}

export default App
