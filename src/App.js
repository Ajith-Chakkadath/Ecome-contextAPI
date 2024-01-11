import logo from './logo.svg';
import './App.css';
import LandingPage from './Pages/LandingPage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import WishPage from './Pages/WishlistPage/Wishpage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/wishlist' element={<WishPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
