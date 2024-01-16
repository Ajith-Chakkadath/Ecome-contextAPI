import { Button } from 'react-bootstrap'
import React from 'react'
import { Card, CardImg, Stack } from 'react-bootstrap'
import { productContext } from '../../Services/Context/ContextAPI'
import { useContext } from 'react'
import { Link, useNavigate} from 'react-router-dom'

function CartCard(props) {
    const navigate = useNavigate()
    const { cartProducts , setCartProducts ,isAuthenticated ,setIsAuthenticated } = useContext(productContext);

    function deleteFromList(){
        const updatedCart = cartProducts.filter((product) => product.id !== props.data?.id);
        setCartProducts(updatedCart);
    }

    function buyNowPage(){
        if(isAuthenticated){
            navigate('/buynow')
        }
        else{
            navigate('/login')
        }
    }
   
  return (
  <Card className='m-4'>
      <div className='d-flex align-items-center justify-content-around'>
          <p>{props.data?.title}</p>
          <img src={props.data?.image} style={{ width: '10rem' , height:'10rem' }}  alt="" />
          <p>Price {props.data?.price}</p>
          <Button onClick={buyNowPage} > <Link to='/buynow' style={{ color:'white',textDecoration:"none"}}>Buy now</Link></Button>
          <Button>Add to wishlist</Button>
          <Button onClick={deleteFromList}>Delete</Button>

      </div>
  </Card>
  )
}

export default CartCard