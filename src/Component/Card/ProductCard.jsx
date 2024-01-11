import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { productContext } from '../../Services/Context/ContextAPI';

function ProductCard(props) {
const {setWishListProduct } = useContext(productContext)
const {setCartproducts} = useContext(productContext)

function addToWish() {
  setWishListProduct((prevWishlist) => [...prevWishlist, props.data]);
}

function addToCart(){
  setCartproducts((prevCartlist) => [...prevCartlist, props.data]);
}


  return (
    <Card style={{ width: '20rem' , height:"28rem"}} className='m-3 p-3'>
    <Card.Img variant="top" src={props.data.image} style={{ width: '10rem' , height:'10rem' }} className="rounded mx-auto"/>
    <Card.Body>
      <Card.Title>{props.data.title}</Card.Title>
      <Card.Text>
        Price <i class="fa-solid fa-indian-rupee-sign"></i> {props.data.price}
      </Card.Text>
      <Button className='m-2' variant="primary" onClick={addToWish} >Know more</Button>
      <Button className='m-2' variant="primary" onClick={addToCart}>Add to cart</Button>
    </Card.Body>
  </Card>
  )
}

export default ProductCard