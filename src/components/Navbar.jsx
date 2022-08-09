


import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div 
     style={{border:"5px solid blue",height:"80px",width:"100%",color:"red",fontWeight:"700",display:"flex"}}>

        <div style={{marginLeft:"50px"}}>
            <Link  to={'/Fruites'} >FRUITES</Link>
        </div>
        <div style={{marginLeft:"50px"}}>
            <Link to={'/Vegs'} > VEGS </Link>
        </div>
        <div style={{marginLeft:"50px"}}>
            <Link to={'/Contacts'} >CONTACT</Link>
        </div>
        <div style={{marginLeft:"50px"}}>
            <Link to={'/FAQ'} >FAQ</Link>
        </div>
     </div>
  )
}

export default Navbar