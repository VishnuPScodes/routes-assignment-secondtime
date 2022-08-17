


import React, { useEffect, useState } from 'react'

function Home() {
 const [num,setNum]=useState(0) 
  useEffect(()=>{
      setTimeout(()=>{
        let wehave=document.getElementById('wehave');
        wehave.style.display='block'
      },1000)

      

      setTimeout(()=>{
        let fruites=document.getElementById('fruites');
        fruites.style.display='block'
      },2000)

      setTimeout(()=>{
        let wehave2=document.getElementById('wehave2')
        wehave2.style.display='block'
      },3000)
      setTimeout(()=>{
        let veg=document.getElementById('veg');
        veg.style.display='block'
      },4000)
  },[])
  let images=[
    'https://images.squarespace-cdn.com/content/v1/59d7e2c7e45a7c0ce235bb55/1552056695609-2KJMOHURUOTUGJCJUQWQ/Captain-Marvel-Film-Review.jpg',
    'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2021/09/black-widow-1-1631278936.jpg',
    'https://hbomax-images.warnermediacdn.com/images/GWUFY3QmtX6e1iQEAAACP/tile.jpeg?size=1280x720&format=jpeg&partner=hbocom&v=d1bfd9aa2be72148ec650ffba39e0b11&productCode=hbomax&host=artist.api.cdn.hbo.com&w=1200',
    'https://www.denofgeek.com/wp-content/uploads/2022/07/Chris-Hemsworth-in-Thor-Love-and-Thunder-Art.jpeg',
    'https://static.toiimg.com/photo/msid-92954243/92954243.jpg',
   
   
  ]
  //var image='https://static.toiimg.com/photo/msid-92954243/92954243.jpg'
  useEffect(()=>{
    setInterval(()=>{
      if(num==images.length){
        setNum(0);
      }
      setNum(num+1)
    },2000)
 
  },[])
  
 
  return <> 
    <h1>(: Welcome to the Premium website :)</h1>
    <div style={{color:"orange"}}  id='wehave'>
      Here we have 
    </div>
    <div style={{color:"blue"}}  id='fruites'>
      Fruites
    </div>

    <div style={{color:'blue'}} id='wehave2'>
      AND

    </div>
    <div style={{color:'green'}} id='veg'>
      Vegitables!
    </div>
    <div id='movieBar'>
        <img src={images[num]} height={'100%'} width='100%' alt="" />
    </div>
    </>
}

export default Home