import React, { useState } from 'react'
import DashBoardCart from '../../Component/Card/DashBoardCart'
import DashBoardProductCard from '../../Component/Card/DashBoardProductCard'
import ProductForm from '../../Component/Form/ProductForm'
import DashBoardNavBar from '../../Component/Navbar/DashBoardNavBar'
import VerticalBar from '../../Component/Navbar/verticalBar'

function DashBoard() {
  const [productData, setProductData] = useState(null)
  return (
    <>
    <DashBoardNavBar />
    <div className='row'>
        <div className='col-sm-2 '>
            <VerticalBar />
        </div>
        <div className='col-sm-10  p-2'>
            {/* <DashBoardCart /> */}
            {/* <DashBoardProductCard /> */}
            <ProductForm />
            <ProductForm onSave={handleSaveProduct} />
      {productData && <DashBoardProductCard product={productData} />}

        </div>
    </div>
    </>
  )
}

export default DashBoard