import React, { useContext } from 'react'
import { productContext } from "../../Services/Context/ContextAPI";

function DashBoardCart() {
 
    const {totalProducts} = useContext(productContext)
  return (
    <div>
        Total Number of products {totalProducts}
    </div>
  )
}

export default DashBoardCart