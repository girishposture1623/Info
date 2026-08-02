import React from 'react'
import { Link } from 'react-router-dom'
export default function Header(){
  return (
    <header className="site-header">
      <div className="container">
        <h1 className="brand"><Link to="/">Hotel Booking</Link></h1>
        <nav>
          <Link to="/rooms">Rooms</Link>
        </nav>
      </div>
    </header>
  )
}
