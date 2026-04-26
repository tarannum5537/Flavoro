import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'


const Home = lazy(()=>import('../pages/Home'))
const Product = lazy(()=>import('../pages/Product'))
const Ragister = lazy(()=>import('../pages/Ragister'))
const Login = lazy(()=>import('../pages/Login'))
const CreateProduct = lazy(()=>import('../components/admin/CreateProduct'))
const Success = lazy(()=>import('../components/Success'))
const Found404 = lazy(()=>import('../components/Found404'))

const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/contact' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/success' element={<Success/>}/>
        <Route path='/register' element={<Ragister/>}/>
        <Route path='/createproduct' element={<CreateProduct/>}/>
        <Route path='*' element={<Found404/>}/>
      
      </Routes>
    </div>
  )
}

export default Mainroutes
