import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SingleFood from '../components/SingleFood'
import {useNavigate} from 'react-router-dom'
function Seafood() {
  const [data,setData]=useState([]);
  const navigate=useNavigate();
    useEffect(()=>{
      axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood').then((e)=>{
          setData(e.data);

      }).catch((err)=>{
        console.log(err)
      })
    },[])
    console.log(data.meals)
  return (
    <div style={{display:"flex",flexWrap:"wrap",flexDirection:"row"}}>
      {data?.meals?.map((e)=>{
        return <div onClick={(()=>{
              navigate(`/seaFoodDetails/${e.idMeal}`)
        })}> <SingleFood  name={e.strMeal} image={e.strMealThumb} /> </div>
      })}
    </div>
  )
}

export default Seafood



