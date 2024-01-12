import React, { useContext } from 'react';
import WishListCard from '../../Component/Card/WishListCart';
import Navbars from '../../Component/Navbar/Index';
import { productContext } from '../../Services/Context/ContextAPI';

function WishPage() {
  const { wishListProducts } = useContext(productContext);
  const listOfProducts = wishListProducts;


  return (
    <>
      <Navbars />
      {listOfProducts.map((product, index) => (
        <WishListCard key={index} data={product} />
      ))}
    </>
  );
}

export default WishPage;
