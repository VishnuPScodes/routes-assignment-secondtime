

import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';
function SeafoodDetails({image,name}) {
    const [data,setData]=useState([]);
    const {idMeal}=useParams();
    useEffect(()=>{
       axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`).then((e)=>{
            setData(e.data);
       });
       console.log('use')
    },[])
    console.log(data);
    console.log('yes')
  return (
    <div>
        <div id='s-d'>
          {data.length!=0 && <img id='image-d' src={data?.meals[0]?.strMealThumb} height={'100%'} width='100%' alt='' /> }
        </div>
        <h3> {data.length!=0 && <h3>{data.meals[0].strMeal}</h3>}</h3>
        <h4>Instructions:</h4>
        <div id='text-para'> {data.length!=0 && <div style={{width:"60%",margin:'auto'}}>{data.meals[0].strInstructions}</div>}</div>
    </div>
  )
}

export default SeafoodDetails