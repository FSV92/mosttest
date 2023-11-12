export const baseUrl = 'https://dummyjson.com';

export const getUsers = `${baseUrl}/users`;
export const authUser = `${baseUrl}/auth/login`;

export const getProducts = `${baseUrl}/products`;
export const getCurrentProduct = (id: string | number | undefined) =>
  `${baseUrl}/products/${id}`;
export const getCategories = `${baseUrl}/products/categories`;
export const getProductsOfCategory = (category: string | undefined) =>
  `${baseUrl}/products/category/${category}`;

export const getCart = (id: string | number | undefined) =>
  `${baseUrl}/carts/${id}`;
export const updateCart = (id: string | number | undefined) =>
  `${baseUrl}/carts/${id}`;
