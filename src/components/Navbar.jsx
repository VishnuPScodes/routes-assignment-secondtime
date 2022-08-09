


import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div 
     style={{border:"5px solid blue",height:"80px",width:"100%",color:"red",fontWeight:"700"}}>

        <div style={{marginLeft:"50px"}}>
            <Link to={'/Fruites'} ></Link>
        </div>
        <div style={{marginLeft:"50px"}}>
            <Link to={'/Vegs'} ></Link>
        </div>
        <div style={{marginLeft:"50px"}}>
            <Link to={'/Contacts'} ></Link>
        </div>
        <div style={{marginLeft:"50px"}}>
            <Link to={'/FAQ'} ></Link>
        </div>
     </div>
  )
}

export default Navbar