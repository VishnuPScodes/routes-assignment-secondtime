import React from 'react'

function Contact() {
  return <> 
    <h2>Feel free to contact us for any queries!</h2>
    <div style={{marginTop:"50px",display:"flex",margin:"auto"}} id='contact-boxes' >
      <div style={{border:"2px solid teal",height:"100px",width:"200px",marginLeft:"30%",color:"blue",fontWeight:"700",textAlign:"center",fontSize:"25px",paddingTop:"55px"}} onClick={(()=>{
        alert('Sorry we dont have this feature at the moment ,Please try later!')
      })}>
         Call
      </div>
      <div style={{border:"2px solid teal",height:"100px",width:"200px",marginLeft:"80px",color:"blue",fontWeight:"700",textAlign:"center",fontSize:"25px",paddingTop:"55px"}} onClick={(()=>{
        alert('Sorry we dont have this feature yet ,please try again later!')
      })}>
        Message
      </div>
    </div>
    </>
}

export default Contact