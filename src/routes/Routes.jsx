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
import Recruitment from '../pages/Recruitment';

const Routess = () => {
  return (
    <Routes>
       <Route path= '/' exact  element= {<Home />} />
       <Route path= '/catalog/:slug'  element= {<Product />} />
       <Route path= '/Introduce'  element= {<Introduce />} />
       <Route path= '/Service'  element= {<Service />} />
       <Route path='/Treatment_results' element = {<Treatment_results />} />
       <Route path='/tuyen-dung' element = {<Recruitment />} />
    </Routes>
    
  )
}

export default Routess