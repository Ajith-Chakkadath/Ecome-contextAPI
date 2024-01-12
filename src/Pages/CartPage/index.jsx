import React, { useContext } from 'react';
import CartCard from '../../Component/Card/CartCard';
import Navbars from '../../Component/Navbar/Index';
import { productContext } from '../../Services/Context/ContextAPI';

function CartPage() {
  const { cartProducts } = useContext(productContext);
  console.log(cartProducts)
  const listOfProducts = cartProducts; // Use an empty array if cartproducts is undefined
  console.log(listOfProducts);

  return (
    <>
      <Navbars />
      {listOfProducts.length > 0 ? (
        listOfProducts.map((product, index) => (
          <CartCard key={index} data={product} />
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </>
  );
}

export default CartPage;
