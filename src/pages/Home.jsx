


import React, { useEffect } from 'react'

function Home() {
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
  return <> 
    <h1>(: Welcome to the Premium website :)</h1>
    <div id='wehave'>
      Here we have 
    </div>
    <div  id='fruites'>
      Fruites
    </div>

    <div id='wehave2'>
      AND

    </div>
    <div id='veg'>
      Vegitables!
    </div>
    </>
}

export default Home