import React, { createContext, useState } from 'react'

export const productContext = createContext()
function ContextAPI({children}) {
    const [wishListProducts , setWishListProducts] = useState([])
    const [cartProducts,setCartProducts] =useState([])
    const [detailsProducts,setDetailsProducts]=useState()

  return (
    <>
      <productContext.Provider value={{wishListProducts,setWishListProducts,cartProducts,setCartProducts,detailsProducts,setDetailsProducts}}>
        {children}
      </productContext.Provider>
    </>
  )
}

export default ContextAPI

