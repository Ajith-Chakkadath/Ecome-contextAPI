import React, { useContext,useEffect,useState } from 'react';
import CartCard from '../../Component/Card/CartCard';
import Navbars from '../../Component/Navbar/Index';
import { productContext } from '../../Services/Context/ContextAPI';
import { userCartList } from '../../Services/Router/API/allAPI';

function CartPage() {
  const { cartProducts,userId  } = useContext(productContext);
  const listOfProducts = cartProducts; // Use an empty array if cartproducts is undefined
  const totalPrice = listOfProducts.reduce((sum, product) => sum + parseFloat( product.price), 0);


  const [listOfProduct, setListOfProduct] = useState([]);
  const productall = async (userId) => {
    const result = await userCartList(userId);
    setListOfProduct(result.data);
  };

  useEffect(() => {
   
    productall(userId);
  }, []);

  console.log(listOfProduct);

  return (
    <>
      <Navbars />
      <div className='container'>

    
      {listOfProducts.length > 0 ? (
        <>
          {listOfProducts.map((product, index) => (
            <CartCard key={index} data={product} />
          ))}
          <p class="text-end">Total Price: {totalPrice} </p>
        
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
        </div>
    </>
  );
}


export default CartPage;