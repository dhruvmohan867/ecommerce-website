import axios from "axios";

const API = axios.create({
  baseURL: "https://project-12-1-5sbh.onrender.com/api",
});

// Auth
export const UserSignUp = async (data) => await API.post("/user/signup", data);
export const UserSignIn = async (data) => await API.post("/user/signin", data);

// Products
export const getAllProducts = async (filter) =>
  await API.get(`/products?${filter}`);
export const getProductDetails = async (id) => await API.get(`/products/${id}`);

// Cart
export const getCart = async (token) =>
  await API.get("/user/cart", {
    headers: { Authorization: `Bearer ${token}` },
  });

export const addToCart = async (token, data) =>
  await API.post(`/user/cart`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const deleteFromCart = async (token, data) =>
  await API.patch(`/user/cart`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

// Favourites
export const getFavourite = async (token) =>
  await API.get(`/user/favourites`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const addToFavourite = async (token, data) =>
  await API.post(`/user/favourites`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const deleteFromFavourite = async (token, data) =>
  await API.patch(`/user/favourites`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

// Orders
export const placeOrder = async (token, data) =>
  await API.post(`/user/order`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getOrders = async (token) =>
  await API.get(`/user/order`, {
    headers: { Authorization: `Bearer ${token}` },
  });
