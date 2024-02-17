import React from 'react'
import { useNavigate } from 'react-router-dom'

function RedirectToHome() {
    const navigate= useNavigate();
    navigate('/');
  return (
    <div>
        <h2 style={{display:'flex',justifyContent:'center' , alignItems:'center'}}>Loading</h2>
    </div>
  )
}

export default RedirectToHome
