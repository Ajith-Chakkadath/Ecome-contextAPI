import {base_URL, URL_base} from './BaseURL'
import { commonAPI } from './commanAPI'

// List all products
export const allProduct = async()=>{
return await commonAPI("GET",`${base_URL}/productList` , "" ,"")
}

// Login 
export const login =async(reqBody)=>{
    return await commonAPI("POST", `${base_URL}/users/login`, reqBody, "")
}
//registeration
export const register = async(reqBody)=>{
    return await commonAPI("POST", `${base_URL}/users/register`, reqBody, "")
}

//Seller  

//add prodcut based on the

//updation if done

//deletion of the product 


//User

//add to cart

//delete from cart

//add to buying list

//delete from buying list 

//producted buyed