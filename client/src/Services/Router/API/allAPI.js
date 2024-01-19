import { base_URL, URL_base } from './BaseURL';
import { commonAPI } from './commanAPI';


// List all products
export const allProduct = async () => {
  return await commonAPI('GET', `${base_URL}/productlist`, '', '');
};

// Login
export const login = async (reqBody) => {
  return await commonAPI('POST', `${base_URL}/users/login`, reqBody, '');
};

// Registration
export const register = async (reqBody) => {
  return await commonAPI('POST', `${base_URL}/users/register`, reqBody, '');
};


// Seller
//list product 
export const sellerProducts = async (sellerId) => {
    
    return await commonAPI('GET', `${base_URL}/users/${sellerId}`, '', '');
  };

// Add product based on the sellerId
export const addProduct = async (reqBody,sellerId) => {
    
  return await commonAPI('POST', `${base_URL}/users/${sellerId}/addproduct`, reqBody, '');
};

// Update product

export const updateProduct = async (reqBody,sellerId ,productId) => {
    
    return await commonAPI('PUT', `${base_URL}/users/${sellerId}/${productId}`, reqBody, '');
  };
// Delete product
export const deleteProduct = async (sellerId, productId) => {
  return await commonAPI('DELETE', `${base_URL}/users/${sellerId}/${productId}`,'','');
};


// User

//All product user brought
export const userProductList = async(userId)=>{
  return await commonAPI('GET',`${base_URL}/users/${userId}`,'','')
}

// list of product added to cart
export const userCartList = async(userId)=>{
  return await commonAPI('GET',`${base_URL}/users/${userId}/cart`,'','')
}
// Add to cart
export const userCartAdd =async (reqBody,userId) => {
  return await commonAPI('POST', `${base_URL}/users/${userId}/cart/addproduct`, reqBody, '');
}
//delet from Cart

export const userCartDelete = async (userId, productId) => {
  return await commonAPI('DELETE', `${base_URL}/users/${userId}/cart/${productId}`,'','');
}

// list of product added to buying list 
export const userBuyList = async(userId)=>{
  return await commonAPI('GET',`${base_URL}/users/${userId}/buy`,'','')
}
// Add to buying list
export const userBuyAdd =async (reqBody,userId) => {
  return await commonAPI('POST', `${base_URL}/users/${userId}/buy/addproduct`, reqBody, '');
}

// Delete from buying list
export const userBuyDelete = async (userId, productId) => {
  return await commonAPI('DELETE', `${base_URL}/users/${userId}/buy/${productId}`,'','');
}
// Product bought
