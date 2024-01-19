import React, { useContext, useEffect, useState } from 'react';
import DashBoardCart from '../../Component/Card/DashBoardCart';
import DashBoardProductCard from '../../Component/Card/DashBoardProductCard';
import ProductForm from '../../Component/Form/ProductForm';
import DashBoardNavBar from '../../Component/Navbar/DashBoardNavBar';
import VerticalBar from '../../Component/Navbar/verticalBar';
import { sellerProducts } from '../../Services/Router/API/allAPI';
import { productContext } from '../../Services/Context/ContextAPI';


function DashBoard() {
const {productAction,sellerId} = useContext(productContext)


  const [product, setProduct] = useState([]);
  const productall = async (sellerId) => {
   
    const result = await sellerProducts(sellerId);
    setProduct(result.data);
  };

  useEffect(() => {
    console.log('welcometo dashboard')
    productall(sellerId);
  }, []);

  console.log(product)

  return (
    <>
      <DashBoardNavBar  />
      <div className='row'>
        <div className='col-sm-2 '>
          <VerticalBar />
        </div>
        <div className='col-sm-10  p-2'>
          {productAction ? (
            <p>Total number of product {product.length}</p>
          ) : (
            <>
              {product.length > 0 ? (
                product.map((data, index) => (
                  <DashBoardProductCard key={index} product={data} />
                ))
              ) : (
                <ProductForm />
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default DashBoard;
