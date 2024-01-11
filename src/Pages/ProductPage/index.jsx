import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { Button } from 'bootstrap';
import Button from 'react-bootstrap/Button';

function Products() {
  return (
   <Container>
       <Row className='m-3'>
           <Col className='text-center'>
           <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" width={300} height={300} alt="" />
           </Col>
           <Col>
           <p className='h1'>Bag</p>
           <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nisi numquam maxime! Praesentium dolorem ad aliquam molestias fugit, tempora quod atque illo minus consequatur accusantium officia quasi et natus? Quasi.
           </p>
           <p> Price 200</p>
           <Button variant="outline-primary">Buy Now</Button>{' '}
           <Button variant="outline-primary">Add to Cart</Button>{' '}
           </Col>
       </Row>
   </Container>
  )
}

export default Products