import { Button, ListGroupItem } from 'react-bootstrap'
import React, { useContext } from 'react'
import { Card, CardImg, Stack } from 'react-bootstrap'
import { productContext } from '../../Services/Context/ContextAPI'
function WishListCard(list) {

    const [wishListProducts , setWishListProducts] = useContext(productContext)
  
    function deleteProduct(){
      setWishListProducts((products) => products.filter((item) => item.id !== list.data?.id));
    }

    console.log(list.data?.title);
  return (
  <Card className='m-4 justify-content-center'>

      <div class="container text-center">
  <div class="row align-items-center">
    <div class="col">
    <p>{list.data?.title}</p>
    </div>
    <div class="col">
    <img src={list.data?.image} style={{ width: '8rem' , height:'8rem' }}  alt="" />
    </div>
    <div class="col">
    <Button className='me-2'>Add to cart</Button>
     <Button>Buy now</Button>
     <Button onClick={deleteProduct}>Delete</Button>
    </div>
  </div>
</div>
  </Card>
  )
}

export default WishListCard