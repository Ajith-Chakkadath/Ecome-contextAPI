import React, { useEffect, useState } from 'react'
import CategoryCard from '../../Component/Card/categoryCard'
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

 const uniqueCategories = [...new Set(allProducts.map(all => all.category))];
 console.log(uniqueCategories)

  return (
      <>
    <Navbars />
    <div className="container ">
    <div className="row justify-content-center">
      <div className='col-sm-3 col-md-2 '>
     <div className='container border'>
       <p>Categorey</p>
       {uniqueCategories.map((data, index) => (
                <CategoryCard key={index} data={data} />
              ))}
   
     </div>

      </div>
      <div className='col-sm-9 col-md-10'>
        <div className="row">
        {
  allProducts.map( (data , index)=>(   
      <div className=" col-sm-8 col-md-6 col-lg-4 col-xl-4 ">
      <ProductCard data={data} />
    
      </div>   
  ))
}
        </div>
     
      </div>
   
</div>
    </div>

    </>
  )
}

export default LandingPage