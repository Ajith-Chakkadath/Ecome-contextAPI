import React, { useContext, useEffect, useState } from 'react'
import CategoryCard from '../../Component/Card/categoryCard'
import ProductCard from '../../Component/Card/ProductCard'
import CardCustom from '../../Component/Card/ProductCard'
import Navbars from '../../Component/Navbar/Index'
import { allProduct } from '../../Services/Router/API/allAPI'
import { productContext } from '../../Services/Context/ContextAPI'




function LandingPage() {
 const {sortingList } = useContext(productContext)
  
  const [allProducts , setAllProducts]=useState([])
 const productall =async ()=>{
 const result = await allProduct()
  setAllProducts(result.data)
 }


 useEffect (()=>{
   console.log('welocme')
  productall()
 } ,[])

console.log(allProducts)


 const uniqueCategories = [...new Set(allProducts.map(all => all.category))];
 
 const filteredProducts = sortingList.length > 0
 ? allProducts.filter((product) => sortingList.includes(product.category))
 : allProducts;


//  const filteredProducts = sortingList.length > 0
//  ? allProductList.filter((product) => sortingList.includes(product.category))
//  : allProductList;


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
  filteredProducts.map( (data )=>(   
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