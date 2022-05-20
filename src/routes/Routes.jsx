import React from 'react'
import {

  Routes,
  Route,
} from "react-router-dom";


import Home from '../pages/Home'
import Introduce from '../pages/Introduce'
import Product from '../pages/Product'
import Service from '../pages/Service'
import Treatment_results from '../pages/Treatment_results'

const Routess = () => {
  return (
    <Routes>
       <Route path= '/' exact  element= {<Home />} />
       <Route path= '/catalog/:slug'  element= {<Product />} />
       <Route path= '/Introduce'  element= {<Introduce />} />
       <Route path= '/Service'  element= {<Service />} />
       <Route path='/Treatment_results' element = {<Treatment_results />} />
    </Routes>
    
  )
}

export default Routess