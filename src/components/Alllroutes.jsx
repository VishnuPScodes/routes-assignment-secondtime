
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Burggers from '../pages/Seafood'
import Contact from '../pages/Contact'
import Faq from '../pages/Faq'
import Fruites from '../pages/Fruites'
import Home from '../pages/Home'
import ProductDetails from '../pages/ProductDetails'
import Vegs from '../pages/Vegs'
import Navbar from './Navbar'
import Seafood from '../pages/Seafood'
import SeafoodDetails from '../pages/SeafoodDetails'

function Alllroutes() {
  return (
    
        <Routes>
            <Route path='/Fruites'  element={<Fruites/>} />
            <Route path='/Navbar'  element={<Navbar/>} />
            <Route path='/Faq'  element={<Faq/>} />
            <Route path='/Seafood'  element={<Seafood/>} />
            <Route path='/SeaFoodDetails/:idMeal'  element={<SeafoodDetails/>} />
            <Route path='/Veg'  element={<Vegs/>} />
            <Route path='/'  element={<Home/>} />
            <Route path='/Contacts'  element={<Contact/>} />
            <Route path='/Productdetails/:id'  element={<ProductDetails
            />} />

        </Routes>

  )
}

export default Alllroutes