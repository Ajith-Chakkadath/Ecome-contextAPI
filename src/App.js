import logo from './logo.svg';
import './App.css';
import LandingPage from './Pages/LandingPage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import WishPage from './Pages/WishlistPage/Wishpage';
import Products from './Pages/ProductPage';
import CartPage from './Pages/CartPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/wishlist' element={<WishPage/>}/>
        <Route path='/details' element={<Products/>}/>
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
