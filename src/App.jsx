import React, {useState,useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp'
import Footer from './Components/Footer/footer';
import Dashboard from './Pages/Dashboard/Dashboard'
import UsersDashboard from './Pages/Dashboard/Pages/UserDashboard/UsersDashboard';
import Contact from './Pages/Contact/Contact';
import Shoping from './Pages/Shoping/Shoping';
import Checkout from './Pages/Checkout/Checkout';
import NotFound from './Components/NotFound/NotFound';

import MainDashboard from './Pages/Dashboard/MainDashboard';
import Product from './Pages/Dashboard/Pages/Product/Product'
import Newpro from './Pages/Dashboard/Pages/Product/Newpro';
import Categories from './Pages/Dashboard/Pages/Categories/Categories';
import Cart from './Pages/Cart/Cart';
import viewCart from './Pages/Cart/viewCart';
import GetOneproduct from './Pages/Dashboard/Pages/Product/GetOneproduct';
import Updateproduct from './Pages/Dashboard/Pages/Product/Updateproduct';
import Createuser from './Pages/Dashboard/Pages/UserDashboard/Createuser';
import Updateuser from './Pages/Dashboard/Pages/UserDashboard/Updateuser';






const App = ()=> {
 
  return (
   
    <div>
     <Router>
    
     <Header /> 
   <div className='mt-6'>
       <Routes>
         <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/Checkout' element={<Checkout />} />
         <Route path='/register' element={<SignUp />} />
          <Route path="*" element={<NotFound  />} />
          <Route path='/Shoping' element={<Shoping />} />
           <Route path='/Cart' element={<Cart />} />
             <Route path='Cart/viewCart' element={<viewCart/>} />
            <Route path='/Contact Us' element={<Contact/>} />
            <Route path='/dashboard' element={<Dashboard />}> 
              <Route path='users' element={<UsersDashboard/>}></Route>
              <Route path='User/new' element={<Createuser />} 
              />
              <Route path='User/Edit/:userId' element={<Updateuser />} />
               <Route path='product' element={<Product/>}></Route>
                <Route path='Categories' element={<Categories/>}></Route>
               <Route path='/dashboard/main' element={<MainDashboard/>}></Route>
  
                <Route path='product/new' element={<Newpro />} />
                <Route path='product/get/:ProductId' element={<GetOneproduct />} />
                <Route path='product/Edit/:ProductId' element={<Updateproduct />} />
              
            </Route>
            
          

      
       </Routes>
       </div>
       <Footer />
     </Router>
    </div>
   
  )
}

export default App