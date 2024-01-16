import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { Button } from 'bootstrap';
import Button from 'react-bootstrap/Button';
import { useState , useEffect} from 'react';
import { productContext } from '../../Services/Context/ContextAPI';
import Navbars from '../../Component/Navbar/Index'
import WishListCard from '../../Component/Card/WishListCart';

function Products() {
    const [isClicked, setClicked] = useState(false);
    const {setWishListProducts,detailsProducts,wishListProducts} = useContext(productContext)
    const [addToWish , SetAddToWish]=useState([])

    function addToCart(){

    }

    const handleButtonClick = () => {
    
      if (isClicked) {
       
    //  setWishListProducts([...wishListProducts, detailsProducts])
     
      // console.log(wishListProducts)

      SetAddToWish([...addToWish ,detailsProducts])
      console.log(addToWish)
        
      
      } else {
        // setWishListProducts((products) => products.filter((item) => item.id !== detailsProducts.id));
        SetAddToWish((pre)=> pre.filter((items)=> items.id !== detailsProducts.id))
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
           <p> Price {detailsProducts?.price}</p>  
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