
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Collection from './pages/Collection'
import Login from './pages/Login'
import About from './pages/About'
import Product from './pages/Product'
import ProductCart from './pages/ProductCart'
import PlaceOrder from './pages/PlaceOrder'
import OrderList from './pages/OrderList'
import Footer from './components/Footer';


const App = () => {
  return (
    
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
 
      <Navbar/>

    
    <Routes>
      
    <Route path={'/'} element={<Home/>}/>
    <Route path={'/collection'} element={<Collection/>}/>
    <Route path={'/login'} element={<Login/>}/>
    <Route path={'/about'} element={<About/>}/>
    <Route path={'/product/:productId'} element={<Product/>}/>
    <Route path={'/productCart'} element={<ProductCart/>}/>
    <Route path={'/place-order'} element={<PlaceOrder/>}/>
    <Route path={'/orderList'} element={<OrderList/>}/>
  


    </Routes>

    <Footer/>
    
    </div>
  )
}

export default App
