import React, { createContext, useState } from 'react'

export const productContext = createContext()
function ContextAPI({children}) {
    const [wishListProducts , setWishListProducts] = useState([])
    const [cartProducts,setCartProducts] =useState([])
    const [detailsProducts,setDetailsProducts]=useState()
    const [allProducts,setAllProducts]=useState()
    const [sortingList , setSortingList] = useState([])
    const [totalPrice ,setTotalPrice] = useState(0)
    const [isSeller ,setIsSeller] = useState(false)
    const [allProductList , setAllProductList] = useState([])
    const [totalProducts , setTotalProducts] = useState()
    const [product , setProduct]=useState([])
    const[productAction , setProductAction] = useState(false)
    const [sellerId , setSellerId] = useState()
    const [userId ,setUserId]=useState()
  return (
    <>
      <productContext.Provider value={{wishListProducts,setWishListProducts,cartProducts,setCartProducts,detailsProducts,setDetailsProducts,
        allProducts,setAllProducts,sortingList,setSortingList,totalPrice,setTotalPrice,allProductList,setAllProductList,totalProducts,setTotalProducts
         , isSeller,setIsSeller ,product,setProduct ,productAction,setProductAction, sellerId,setSellerId,userId,setUserId}}>
        {children}
      </productContext.Provider>
    </>
  )
}

export default ContextAPI


// export const sellerontext = createContext()

// function SellerAPI({children}){

//   return (
//     <>
//     <sellerontext.Provider value={{}}>
//       {children}
//     </sellerontext.Provider>
//     </>
//   )
// }

// export default SellerAPI