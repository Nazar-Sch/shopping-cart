import { api } from "../api"
import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  ADD_TO_CART,
  CHANGE_AMOUNT_IN_CART,
  REMOVE_FROM_CART,
} from "./actionTypes"

export const fetchProducts = () => async (dispatch: any) => {
  try {
    const res = await api.getProducts()
    const products = dispatch({ type: GET_PRODUCTS_SUCCESS, payload: res.data })
    return products
  } catch (err) {
    console.error("Error")
    dispatch({ type: GET_PRODUCTS_FAIL, payload: err })
  }
}

export const addProductToCart = (id: string) => (dispatch) => {
  return dispatch({ type: ADD_TO_CART, payload: id })
}

export const changeAmountInCart = (id: string, amount: number) => (dispatch) => {
  return dispatch({ type: CHANGE_AMOUNT_IN_CART, payload: { id, amount} })
}

export const removeProductFromCart = (id: string) => (dispatch) => {
  return dispatch({ type: REMOVE_FROM_CART, payload: id })
}
