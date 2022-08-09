



import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Fruites() {
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        axios.get('https://www.fruityvice.com/api/fruit/all').then((e)=>{
            setData(e.data)
            setLoading(false)
        })
    },[])
    const navigate=useNavigate();
    console.log(data,'api data');
  return (
    <div style={{display:"flex",flexWrap:"wrap"}}>
        {loading==true?"Loading...":  <> 
       {data.map((e)=>{
        return <div onClick={(()=>{
            navigate(`/Productdetails/${e.name}`)
        })} style={{border:"3px solid blue",height:"400px",width:"300px",margin:"30px",boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}} >
            <h1 style={{color:"red"}} >{e.name}</h1>
            <h3>{e.family}</h3>
        </div>
       })}
        </>}
      
    </div>
  )
}

export default Fruites