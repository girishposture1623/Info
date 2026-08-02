import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
export default function Room(){
  const { id } = useParams();
  const [room,setRoom]=useState(null);
  useEffect(()=>{ axios.get((import.meta.env.VITE_API_URL||'http://localhost:5000') + '/rooms/' + id).then(r=>setRoom(r.data)).catch(()=>{}); },[id])
  if(!room) return <div>Loading...</div>
  return (
    <div style={{padding:20}}>
      <h2>{room.title}</h2>
      <p>{room.description}</p>
      <p>Price: ${room.price}</p>
    </div>
  )
}
