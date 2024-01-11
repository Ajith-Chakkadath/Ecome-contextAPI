import React, { useEffect, useState } from 'react'
import ProductCard from '../../Component/Card/ProductCard'
import CardCustom from '../../Component/Card/ProductCard'
import Navbars from '../../Component/Navbar/Index'
import { allProduct } from '../../Services/Router/API/allAPI'




function LandingPage() {
  
  const [allProducts , setAllProducts]=useState([])
 const productall =async ()=>{
 const result = await allProduct()
  setAllProducts(result.data)
 }
const test = "string"

 useEffect (()=>{
  productall()
 } ,[test])


  return (
      <>
    <Navbars />
    <div className="container">
    <div className="row justify-content-center">
    {
  allProducts.map( (data , index)=>(   
      <div className=" col-sm-12 col-md-6 col-lg-4 col-xl-3 ">
      <ProductCard data={data} />
    
      </div>   
  ))
}
</div>
    </div>

    </>
  )
}

export default LandingPage