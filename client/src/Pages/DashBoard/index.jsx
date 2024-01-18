import React, { useContext, useState } from 'react';
import DashBoardCart from '../../Component/Card/DashBoardCart';
import DashBoardProductCard from '../../Component/Card/DashBoardProductCard';
import ProductForm from '../../Component/Form/ProductForm';
import DashBoardNavBar from '../../Component/Navbar/DashBoardNavBar';
import VerticalBar from '../../Component/Navbar/verticalBar';
import { productContext } from '../../Services/Context/ContextAPI';

function DashBoard() {
  const { product ,productAction } = useContext(productContext);

  return (
    <>
      <DashBoardNavBar />
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
