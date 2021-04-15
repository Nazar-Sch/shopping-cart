import { api } from '../api'
import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL } from './actionTypes'

export const fetchProducts = () => async (dispatch: any) => {
  api.getProducts()
    .then(res => {
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: res.data,
      })
    })
    .catch(err => {
      console.error('Error')
      dispatch({
        type: GET_PRODUCTS_FAIL,
        payload: err,
      })
    })
}
