import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const auth = {
  login: (email: string, password: string) => 
    api.post('/users/signin', { email, password }),
  
  register: (name: string, email: string, password: string) =>
    api.post('/users/signup', { name, email, password }),
  
  getProfile: () => api.get('/users/profile')
};

export const products = {
  getAll: () => api.get('/products'),
  
  getOne: (id: string) => api.get(`/products/${id}`),
  
  create: (productData: any) => api.post('/products', productData),
  
  update: (id: string, productData: any) => 
    api.put(`/products/${id}`, productData),
  
  delete: (id: string) => api.delete(`/products/${id}`)
};

export const orders = {
  create: (orderData: any) => api.post('/orders', orderData),
  
  getMyOrders: () => api.get('/orders/mine'),
  
  getOne: (id: string) => api.get(`/orders/${id}`),
  
  pay: (id: string, paymentResult: any) => 
    api.put(`/orders/${id}/pay`, paymentResult)
}; 