
import React, { useEffect, useState } from 'react'


function SingleQuestion({data}) {
    const [show,setShow]=useState(false);
    const [set,setSet]=useState(false);

    let classdefault='answer';
   if(set){
    classdefault='answer-2'
   }
   else{
    classdefault='answer'
   }
    useEffect(()=>{
       if(show){
        let hide=document.getElementById('an');
        hide.style.display='block'
       }
       else{
        let hide=document.getElementById('an');
        hide.style.display='none'
       }
    },[show])
  return <> 
    <div id='s-q' >
        <div  style={{display:"flex" }}>
        <h4>{data.q}</h4> <button style={{border:"1px solid black",backgroundColor:'white',height:"50px",width:"100px"}} onClick={(()=>{
            setSet(!set)
        })} >{show==true?"Hide Answer":"Show Answer"}</button>
        </div>
        <div className={classdefault} style={{display:""}} id={'an'} >
            {data.a}
           </div>
       
    </div>
    </>
}

export default SingleQuestion