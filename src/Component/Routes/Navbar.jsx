import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Student from '../Student'
import Contact from '../Contact'
import Addnewstu from '../Addnewstu'
import Edit from '../Edit'
import '../Style/navbar.css'

const Navbar = () => {
  return (
    <div>
    <BrowserRouter>
    <div className="navbar">
        <Link to='/'>Home</Link>
        <Link to='/student'>Student</Link>
        <Link to='/contact'>Contact USe</Link>
    </div>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/student' element={<Student/>} />
        <Route path='/contact' element={<Contact/>} /> 
        <Route path='/addnewsrudent' element={<Addnewstu/>}/>
        <Route path='/edit' element={<Edit/>} /> 
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Navbar