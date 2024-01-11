import React, { useContext } from 'react';
import CartCard from '../../Component/Card/CartCard';
import Navbars from '../../Component/Navbar/Index';
import { productContext } from '../../Services/Context/ContextAPI';

function CartPage() {
  const { cartproducts } = useContext(productContext);
  const listOfProducts =cartproducts;
  console.log(listOfProducts);

  return (
    <>
      <Navbars />
      {listOfProducts.map((product, index) => (
        <CartCard key={index} data={product} />
      ))}
    </>
  );
}

export default CartPage;