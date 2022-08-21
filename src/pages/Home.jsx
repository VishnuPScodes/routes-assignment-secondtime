


import React, { useEffect, useState } from 'react'

function Home() {
 const [num,setNum]=useState(0) 
 console.log(num,'num')
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
      setTimeout(()=>{
        let movie=document.getElementById('movieBar');
        movie.style.display='block'
      },5000)
  },[])
  let images=[
    'https://images.squarespace-cdn.com/content/v1/59d7e2c7e45a7c0ce235bb55/1552056695609-2KJMOHURUOTUGJCJUQWQ/Captain-Marvel-Film-Review.jpg',
    'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2021/09/black-widow-1-1631278936.jpg',
    'https://hbomax-images.warnermediacdn.com/images/GWUFY3QmtX6e1iQEAAACP/tile.jpeg?size=1280x720&format=jpeg&partner=hbocom&v=d1bfd9aa2be72148ec650ffba39e0b11&productCode=hbomax&host=artist.api.cdn.hbo.com&w=1200',
    'https://www.denofgeek.com/wp-content/uploads/2022/07/Chris-Hemsworth-in-Thor-Love-and-Thunder-Art.jpeg',
    'https://static.toiimg.com/photo/msid-92954243/92954243.jpg',
   
   
  ]
  setTimeout(()=>{
      
if(num==null){

}
else if(num==0){
   let main=document.getElementById('maind');
   main.style.backgroundColor='#ffedc5'
}
else if(num==1){
  let main=document.getElementById('maind');
  main.style.backgroundColor='#911115' 
}
else if(num==2){
  let main=document.getElementById('maind');
  main.style.backgroundColor='#536937'
}
else if(num==3){
  let main=document.getElementById('maind');
  main.style.backgroundColor='#0121a8'
}
else if(num==4){
  let main=document.getElementById('maind');
  main.style.backgroundColor='#f21a77'
}

  },5000)

  //var image='https://static.toiimg.com/photo/msid-92954243/92954243.jpg'
  // useEffect(()=>{
  //   setInterval(()=>{
  //     if(num==images.length){
  //       setNum(0);
  //     }
  //     setNum(num+1)
  //   },2000)
 
  // },[])
  
 
  return <div id='maind'> 
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
    <div  onClick={(()=>{
      console.log(num)
      if(num==images.length){
        setNum(0)
      }
      else{
       
        if(num!=images.length-1){
          setNum(num=>num+1);
        }
        else{
          setNum(0)
        }
      }
      console.log(num)
    })} id='movieBar'>
        <img src={images[num]} height={'100%'} width='100%' alt="" />
    </div>
    <div>
      <h1>This is the best place for you! </h1>
       <h2 onMouseEnter={(()=>{
          let movie=document.getElementById('movieLover');
          movie.style.display='block'
       })}>If you are a</h2>
       <h2 id='movieLover' onMouseEnter={(()=>{
        let smiley=document.getElementById('smiley');
        smiley.style.display='block';
       })} >Movie Lover!</h2>
       <h2 id='smiley'>😉</h2>
    </div>
    <div ></div>
    </div>
}


export default Home