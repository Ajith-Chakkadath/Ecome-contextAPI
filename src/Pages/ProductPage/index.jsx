import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { Button } from 'bootstrap';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { productContext } from '../../Services/Context/ContextAPI';
import Navbars from '../../Component/Navbar/Index';

function Products() {
    const [isClicked, setClicked] = useState(true);
    const {setWishListProducts,detailsProducts,wishListProducts} = useContext(productContext)

    function addToCart(){

    }

    const handleButtonClick = () => {
      // Your action when the button is clicked
      // For now, let's just log a message
console.log(isClicked)
    
      if (isClicked) {
        setWishListProducts((products) => [...products, detailsProducts]);
      
      } else {
        setWishListProducts((products) => products.filter((item) => item.id !== detailsProducts.id));
      }
    
      setClicked(!isClicked);

    };
  
  return (
      <>
      <Navbars></Navbars>
   <Container>
       <Row className='m-3'>
           <Col className='text-center'>
           <img src={detailsProducts?.image} width={300} height={300} alt="" />
           </Col>
           <Col>
           <p className='h1'>{detailsProducts?.title}</p>
           <p>
               {detailsProducts?.description}
                    </p>
           <p> Price 200</p>  
           <Button
      variant={isClicked ? 'light' : 'light'}
      onClick={handleButtonClick}
      style={{
       
        padding: '10px',
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <i className="fa-solid fa-heart" style={{ color: isClicked ? 'black' : 'red' }}  ></i>
    </Button>
            
           <Button variant="outline-primary">Buy Now</Button>{' '}
           <Button variant="outline-primary" onClick={addToCart}>Add to Cart</Button>{' '}
         
           </Col>
       </Row>
   </Container>
   </>
  )
}

export default Products