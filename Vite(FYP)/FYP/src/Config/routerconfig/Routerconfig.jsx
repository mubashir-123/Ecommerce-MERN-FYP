import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../Pages/Home/Home'
import Aboutus from '../../Pages/Aboutus/Aboutus'
import Contactus from '../../Pages/Contactus/Contactus'
import Estimation from '../../Pages/Estimation/Estimation'
import Services from '../../Pages/Services/Services'
import Product from '../../Pages/Product/Product'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

const Routerconfig = () => {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
            <Route path = '/' element = {<Home />} />
            <Route path = '/Aboutus' element = {<Aboutus />} />
            <Route path = '/Contactus' element = {<Contactus />} />
            <Route path= '/Product' element = {<Product />} />
            <Route path = '/Estimation' element = {<Estimation />} />
            <Route path = '/Services' element = {<Services />} />
        </Routes>
       <Footer /> 
    </BrowserRouter>
  )
}

export default Routerconfig