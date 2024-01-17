import React, { createContext, useState } from 'react'

export const productContext = createContext()
function ContextAPI({children}) {
    const [wishListProducts , setWishListProducts] = useState([])
    const [cartProducts,setCartProducts] =useState([])
    const [detailsProducts,setDetailsProducts]=useState()
    const [allProducts,setAllProducts]=useState()
    const [sortingList , setSortingList] = useState([])
    const [totalPrice ,setTotalPrice] = useState(0)
    const [isAuthenticated , setIsAuthenticated]=useState(false)
    const [isSeller ,setIsSeller] = useState(false)
    const [allProductList , setAllProductList] = useState([])

  return (
    <>
      <productContext.Provider value={{wishListProducts,setWishListProducts,cartProducts,setCartProducts,detailsProducts,setDetailsProducts,
        allProducts,setAllProducts,sortingList,setSortingList,totalPrice,setTotalPrice,allProductList,setAllProductList
         ,isAuthenticated,setIsAuthenticated , isSeller,setIsSeller}}>
        {children}
      </productContext.Provider>
    </>
  )
}

export default ContextAPI

