import {base_URL, URL_base} from './BaseURL'
import { commonAPI } from './commanAPI'


export const allProduct = async()=>{
return await commonAPI("GET",`${URL_base}/products` , "" ,"")
}


export const login =async(reqBody)=>{
    return await commonAPI("POST", `${base_URL}/users/login`, reqBody, "")
}

export const register = async(reqBody)=>{
    return await commonAPI("POST", `${base_URL}/users/register`, reqBody, "")
}