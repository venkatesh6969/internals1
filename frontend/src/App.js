import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Menu from './Components/Menu'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/menu' element={<Menu></Menu>}></Route>
        <Route path='/aboutus' element={<About></About>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App