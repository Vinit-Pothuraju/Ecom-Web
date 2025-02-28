import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import { Home, Collections, Product, Contact, About, Cart, Login, PlaceOrder, Orders,Profile} from './pages';

import Navbar from './components/Navbar'
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Collections' element={<Collections/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Product/:productId' element={<Product/>} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/PlaceOrder' element={<PlaceOrder/>} />
        <Route path='/Orders' element={<Orders/>} />
        <Route path='/Profile' element={<Profile/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App