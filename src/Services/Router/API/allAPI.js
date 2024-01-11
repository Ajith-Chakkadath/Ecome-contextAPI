import {URL_base} from './BaseURL'
import { commonAPI } from './commanAPI'

export const allProduct = async()=>{
return await commonAPI("GET",`${URL_base}/products` , "" ,"")
}