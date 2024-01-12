import { Button } from 'react-bootstrap'
import React from 'react'
import { Card, CardImg, Stack } from 'react-bootstrap'

function CartCard(props) {

    function deleteFromList(){

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