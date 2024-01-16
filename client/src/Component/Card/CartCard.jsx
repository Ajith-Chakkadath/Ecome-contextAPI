import { Button } from 'react-bootstrap'
import React from 'react'
import { Card, CardImg, Stack } from 'react-bootstrap'
import { productContext } from '../../Services/Context/ContextAPI'
import { useContext } from 'react'

function CartCard(props) {
    const { cartProducts , setCartProducts } = useContext(productContext);

    function deleteFromList(){
        const updatedCart = cartProducts.filter((product) => product.id !== props.data?.id);
        setCartProducts(updatedCart);
    }
   
  return (
  <Card className='m-4'>
      <div className='d-flex align-items-center justify-content-around'>
          <p>{props.data?.title}</p>
          <img src={props.data?.image} style={{ width: '10rem' , height:'10rem' }}  alt="" />
          <p>Price {props.data?.price}</p>
          <Button>buy now</Button>
          <Button>Add to wishlist</Button>
          <Button onClick={deleteFromList}>Delete</Button>

      </div>
  </Card>
  )
}

export default CartCard