


import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div id='nav-head'
     style={{border:"5px solid blue",height:"80px",width:"99%",color:"red",fontWeight:"700",display:"flex"}}>
        

        <div style={{marginLeft:"50px"}}>
            <Link id='link'  to={'/'}  style={{textDecoration:"none"}}>HOME</Link>
        </div>

        <div style={{marginLeft:"50px"}}>
            <Link id='link'  style={{textDecoration:"none"}} to={'/Seafood'} >Seafood</Link>
        </div>
        <div style={{marginLeft:"50px"}}>
            <Link  id='link' style={{textDecoration:"none"}} to={'/Fruites'} >FRUITES</Link>
        </div>
        <div style={{marginLeft:"50px"}}>
            <Link id='link' style={{textDecoration:"none"}} to={'/Vegs'} > VEGS </Link>
        </div>
        <div style={{marginLeft:"50px"}}>
            <Link id='link' style={{textDecoration:"none"}} to={'/Contacts'} >CONTACT</Link>
        </div>
        <div style={{marginLeft:"50px"}}>
            <Link id='link' style={{textDecoration:"none"}} to={'/FAQ'} >FAQ</Link>
        </div>
     </div>
  )
}

export default Navbar