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
export const sellerProducts = async (reqBody,sellerId) => {
    
    return await commonAPI('Get', `${base_URL}/product/${sellerId}`, reqBody, '');
  };

// Add product based on the sellerId
export const addProduct = async (reqBody,sellerId) => {
    
  return await commonAPI('POST', `${base_URL}/product/${sellerId}/addProduct`, reqBody, '');
};

// Update product

export const updateProduct = async (reqBody,sellerId ,productId) => {
    
    return await commonAPI('PUT', `${base_URL}/product/${sellerId}/${productId}`, reqBody, '');
  };
// Delete product
export const deleteProduct = async (sellerId, productId) => {
  return await commonAPI('DELETE', `${base_URL}/product/${sellerId}/${productId}`, '', '');
};


// User

// Add to cart

// Delete from cart

// Add to buying list

// Delete from buying list

// Product bought
