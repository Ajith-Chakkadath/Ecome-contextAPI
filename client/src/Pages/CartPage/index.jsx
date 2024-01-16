import React, { useContext } from 'react';
import CartCard from '../../Component/Card/CartCard';
import Navbars from '../../Component/Navbar/Index';
import { productContext } from '../../Services/Context/ContextAPI';

function CartPage() {
  const { cartProducts,  } = useContext(productContext);
  const listOfProducts = cartProducts; // Use an empty array if cartproducts is undefined
  const totalPrice = listOfProducts.reduce((sum, product) => sum + product.price, 0);

  return (
    <>
      <Navbars />
      <div className='container'>

    
      {listOfProducts.length > 0 ? (
        <>
          {listOfProducts.map((product, index) => (
            <CartCard key={index} data={product} />
          ))}
          <p class="text-end">Total Price: {totalPrice.toFixed(2)}</p>
        
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
        </div>
    </>
  );
}


export default CartPage;