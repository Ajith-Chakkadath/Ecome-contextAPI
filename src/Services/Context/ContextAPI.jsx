import React, { createContext, useState } from 'react'

export const productContext = createContext()
function ContextAPI({children}) {
    const [wishListProducts , setWishListProduct] = useState([])
    const [cartproducts,setCartProducts] =useState([])

  return (
    <>
      <productContext.Provider value={{wishListProducts,setWishListProduct,cartproducts,setCartProducts}}>
        {children}
      </productContext.Provider>
    </>
  )
}

export default ContextAPI

