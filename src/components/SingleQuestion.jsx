


import React, { useEffect, useState } from 'react'

function SingleQuestion({data}) {
    const [show,setShow]=useState(false);
    useEffect(()=>{
       if(show){
        let hide=document.getElementById(data.id);
        hide.style.display='block'
       }
       else{
        let hide=document.getElementById(data.id);
        hide.style.display='none'
       }
    },[show])
  return <> 
    <div id='s-q' >
        <div  style={{display:"flex" }}>
        <h4>{data.q}</h4> <button style={{border:"1px solid black",backgroundColor:'white',height:"50px",width:"100px"}} onClick={(()=>{
            setShow(!show)
        })} >{show==true?"Hide Answer":"Show Answer"}</button>
        </div>
        <div style={{display:"none"}} id={data.id} >
            {data.a}
           </div>
       
    </div>
    </>
}

export default SingleQuestion