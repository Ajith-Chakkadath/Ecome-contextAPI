import React, { useContext } from 'react';
import CartCard from '../../Component/Card/CartCard';
import ShippingCard from '../../Component/Card/ShippingCard';
import Navbars from '../../Component/Navbar/Index';
import { productContext } from '../../Services/Context/ContextAPI';

function BuyNowPage() {
  const { cartProducts } = useContext(productContext);
  const listOfProducts = cartProducts || []; // Use an empty array if cartProducts is undefined
  const totalPrice = listOfProducts.reduce((sum, product) => sum + product.price, 0);

  return (
    <>
      <Navbars />
      <div className="container">
        <div className="row">
          <div className="col">
            <ShippingCard  />
          </div>
          <div className="col">
            {listOfProducts.length > 0 ? (
              listOfProducts.map((product, index) => (
                <CartCard key={index} data={product} />
              ))
            ) : (
              <p>No products in the cart</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default BuyNowPage;
