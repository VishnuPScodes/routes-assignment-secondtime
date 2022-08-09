

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
    const [show,setShow]=useState(false)
    const [data,setData]=useState([]);
    const {id}=useParams();
    useEffect(()=>{
        axios.get(`https://www.fruityvice.com/api/fruit/${id}`).then((e)=>{
             setData(e.data)
        })
        if(show){
            let ds=document.getElementById('display');
            ds.style.display='block'
        }
        else{
            let ds=document.getElementById('display');
            ds.style.display='none'  
        }
    },[show])
    console.log(data.nutritions,'data')
  
  return (
    <div>
        <h1 style={{color:"green"}} >
            {data.name}
        </h1>
        <p>family:{data.family}</p>
        <p>genus:{data.genus}</p>
        <p>order:{data.order}</p>
       <button style={{backgroundColor:"white"}} onClick={(()=>{
        setShow(!show)
       })}>{show?'Hide Nutrients':"Show Nutrients"}</button>
       <div id='display' style={{border:"2px solid teal",height:"200px",width:"210px",margin:"auto",marginTop:"20px",textAlign:"left",paddingLeft:"50px"}} >
         <p>carbohydrates:{data.nutritions?.carbohydrates}</p>
         <p>proteins:{data.nutritions?.protein}</p>
         <p>calorie:{data.nutritions?.calories}</p>
         <p>sugar:{data.nutritions?.sugar}</p>
       </div>
    </div>
  )
}

export default ProductDetails