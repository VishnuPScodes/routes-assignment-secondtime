


import React from 'react'

function SingleFood({image,name}) {
  return (
    <div>
        <div id='seafood-single' style={{border:"5px solid green"}}>
             <div style={{border:"2px solid black",width:"100%",height:"70%"}}>
                <img height={'100%'} width={'100%'} src={image} alt="" />
             </div>
             <h3>{name}</h3>
        </div>
    </div>
  )
}

export default SingleFood