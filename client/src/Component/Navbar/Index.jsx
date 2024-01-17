import React, { useContext, useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import { productContext } from "../../Services/Context/ContextAPI";
import { Link, useNavigate } from "react-router-dom";

function Navbars() {
  const { wishListProducts , cartProducts ,isSeller ,isAuthenticated} = useContext(productContext);
  let islogin = 'login'
   const navigate = useNavigate()

      // function handleNaviagtion ( ){
      //   if(isAuthenticated)
      //   {
      //     islogin='logout'
      //   }
      //   else {
      //   islogin='login'
      //     navigate('/login')
      //   }
      // }

  // console.log(wishListProducts)
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
          <button type="button" class="btn btn-primary me-5  ">
        {
          isAuthenticated? "logout" : <Link to="/login" style={{ color:'white',textDecoration:"none"}}> Login</Link> 
        }
          </button>
          {
            isSeller ? <button type="button" class="btn btn-primary me-5 ">
            <Link to="/productedit" style={{ color:'white',textDecoration:"none"}}>Product Edit</Link> 
            </button> : ''
          }

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
