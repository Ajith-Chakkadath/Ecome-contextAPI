// App.js
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import WishPage from './Pages/WishlistPage/Wishpage';
import Products from './Pages/ProductPage';
import CartPage from './Pages/CartPage';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import BuyNowPage from './Pages/BuyNowPage/BuyNowPage';
import PrivateRoute from './Services/PrivateRoutes/privateRoutes';
import { productContext } from '../src/Services/Context/ContextAPI';
import DashBoard from './Pages/DashBoard';
import ProductManagement from './Pages/test';
import ProductForm from './Component/Form/ProductForm';

function App() {
  let isAuthenticated = localStorage.getItem('authentication')
  isAuthenticated = JSON.parse(isAuthenticated);



  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/wishlist" element={<WishPage />} />
          <Route path="/details" element={<Products />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        {
          isAuthenticated ? <Route path="/buynow" element={<BuyNowPage />} /> : <Route path="/login" element={<Login />} />
        }
           <Route path='/dashboard' element={<DashBoard />} />
    <Route path='/productform' element={<ProductForm />} />
        </Routes>
      </Router>

      {/* <ProductManagement /> */}

{/* <Router>
  <Routes>
    <Route path='/dashboard' element={<DashBoard />} />
    <Route path='/productform' element={<ProductForm />} />
  </Routes>
</Router> */}

    </div>
  );
}

export default App;
