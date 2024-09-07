
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Nav } from './layer/Nav'
import { Footer } from './layer/Footer'
import { Home } from './Component/Home'
import { Product } from './Component/Product'
import { CreateProduct } from './Component/CreateProduct'
import { PageNotFound } from './layer/PageNotFound'
import { EditProduct } from './Component/EditProduct'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <div className="container">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<PageNotFound/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/product/create' element={<CreateProduct/>}/>
        <Route path='/product/edit/:id' element={<EditProduct/>}/>
        
      </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
