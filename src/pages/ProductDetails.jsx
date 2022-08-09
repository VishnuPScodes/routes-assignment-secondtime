

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get(`https://www.fruityvice.com/api/fruit/${id}`).then((e)=>{
             setData(e.data)
        })
    },[])
    console.log(data,'data')
    const {name}=useParams();
  return (
    <div>ProductD:{name}</div>
  )
}

export default ProductDetails