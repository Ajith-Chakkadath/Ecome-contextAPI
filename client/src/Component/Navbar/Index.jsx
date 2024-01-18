import React, { useContext, useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import { productContext } from "../../Services/Context/ContextAPI";
import { Link, useNavigate } from "react-router-dom";

function Navbars() {
  const { wishListProducts , cartProducts ,isSeller ,isAuthenticated , setIsAuthenticated} = useContext(productContext);
  const [isValue, setIsValue] = useState('logout');
   const navigate = useNavigate()
function handleChange(){
  isAuthenticated(false)
}
 
  return (
    <Navbar className="bg-body-tertiary py-3">
      <Container>
        <Navbar.Brand > <Link to="/" style={{ color:'black',textDecoration:"none"}}>Ecome</Link> </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <button type="button" class="btn btn-primary position-relative me-5 text-light">
            <Link to="/wishlist" style={{ color:'white',textDecoration:"none"}}> WishList</Link> 
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {wishListProducts?.length}
              <span class="visually-hidden">WishList</span>
            </span>
          </button>
          <button type="button" class="btn btn-primary position-relative me-5 ">
          <Link to="/cart" style={{ color:'white',textDecoration:"none"}}> Cart</Link> 
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cartProducts?.length}
              <span class="visually-hidden">Cart</span>
            </span>
          </button>
          
          {isAuthenticated ? (
        <button type="button" className="btn btn-primary me-5" onClick={() => {
          setIsAuthenticated(false);
          setIsValue('login');
        }}>
          {isValue === 'login' ? (
            <Link to="/login" style={{ color: 'white', textDecoration: "none" }}> Login</Link>
          ) : (
            'Logout' 
          )}
        </button>
      ) : (
        <button type="button" className="btn btn-primary me-5">
          <Link to="/login" style={{ color: 'white', textDecoration: "none" }}> Login</Link>
        </button>
      )}
         
         {isAuthenticated && isSeller && (
            <button type="button" className="btn btn-primary me-5">
              <Link to="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</Link>
            </button>
          )}

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
