import { Button } from 'react-bootstrap'
import React from 'react'
import { Card, CardImg, Stack } from 'react-bootstrap'

function CartCard(props) {
    console.log(props.data)
  return (
  <Card className='m-4'>
      <div className='d-flex align-items-center justify-content-around'>
          <p>cart</p>
          <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" style={{ width: '10rem' , height:'10rem' }}  alt="" />
          <Button>Add buy now</Button>
      </div>
  </Card>
  )
}

export default CartCard