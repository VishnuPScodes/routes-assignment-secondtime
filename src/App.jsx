import { useState } from 'react'

import './App.css'
import Alllroutes from './components/Alllroutes'
import Navbar from './components/Navbar'
import Fruites from './pages/Fruites'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      {/* <Fruites/> */}
     <Alllroutes/>
    </div>
  )
}

export default App
