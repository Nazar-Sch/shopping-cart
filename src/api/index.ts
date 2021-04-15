import axios from 'axios'

const BASE_URL = axios.create({
  baseURL: 'https://607602090baf7c0017fa76d6.mockapi.io/api/'
})

export const api = {
  getProducts: () => BASE_URL.get('products/products')
}