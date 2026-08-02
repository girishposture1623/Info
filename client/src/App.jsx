import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import Room from './pages/Room'

export default function App(){
  return (
    <div>
      <nav style={{padding:10}}>
        <Link to="/">Home</Link> | <Link to="/rooms">Rooms</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/rooms" element={<Rooms/>} />
        <Route path="/rooms/:id" element={<Room/>} />
      </Routes>
    </div>
  )
}
