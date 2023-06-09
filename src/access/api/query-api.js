import { axiosClient } from './axios-client';

export const query = () => ({
  product: {
    getAll: () => axiosClient.get('/product'),
    getFilter: (filter) =>
      filter === undefined
        ? null
        : axiosClient.get('/product/filter?' + filter),
    getOne: (id) =>
      id === undefined ? null : axiosClient.get('/product/' + id),
    getSearch: (query) =>
      query === undefined ? null : axiosClient.get('/product/search/' + query),
  },
  category: {
    getAll: () => axiosClient.get('/category'),
    getFilter: (filter) =>
      filter === undefined ? null : axiosClient.get('/category' + filter),
    getOne: (id) =>
      id === undefined ? null : axiosClient.get('/category' + id),
  },
  auth: {
    login: (payload) =>
      payload === undefined ? null : axiosClient.post('/auth/login', payload),
    register: (payload) =>
      payload === undefined ? null : axiosClient.post('/register', payload),
  },
  comment: {
    getListByProductId: (productId) =>
      productId === undefined ? null : axiosClient.get('/comment/' + productId),
    add: (payload) =>
      payload === undefined ? null : axiosClient.post('/comment/add', payload),
  },
});
