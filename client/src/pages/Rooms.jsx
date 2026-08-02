import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default function Rooms(){
  const [rooms,setRooms]=useState([])
  useEffect(()=>{ axios.get((import.meta.env.VITE_API_URL||'http://localhost:5000') + '/rooms').then(r=>setRooms(r.data)).catch(()=>{}); },[])
  return (
    <div style={{padding:20}}>
      <h2>Rooms</h2>
      <ul>
        {rooms.map(r=> (
          <li key={r._id}><Link to={'/rooms/'+r._id}>{r.title} - ${r.price}</Link></li>
        ))}
      </ul>
    </div>
  )
}
