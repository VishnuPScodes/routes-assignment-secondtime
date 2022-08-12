


import React from 'react'
import SingleQuestion from '../components/SingleQuestion'

function Faq() {
  const data=[
    {q:'hdshjffffffffffffsjhffffffffffffsfsfsfs',
    a:'loterdfdfffffffffffffffffffffffffffffffffffffffffffffff',
    id:1
  },
  {q:'hdshjffffffffffffsjhffffffffffffsfsfsfs',
  a:'loterdfdfffffffffffffffffffffffffffffffffffffffffffffff',
  id:1
},
{q:'hdshjffffffffffffsjhffffffffffffsfsfsfs',
a:'loterdfdfffffffffffffffffffffffffffffffffffffffffffffff',
id:1
}
  ]
  return <>
    <h1>Frequently asked questions 👇</h1>
    {data.map((e)=>{
      return <SingleQuestion data={e} />
    })}
 
    </>
}

export default Faq