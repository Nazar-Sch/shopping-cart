import { GET_PRODUCTS_SUCCESS, SET_IN_CART } from "./actionTypes"

const initialState: IProductsState = {
  products: [],
  cart: [],
}

const reducer = (
  state: IProductsState = initialState,
  action: TProductAction
) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      {
        return {
          ...state,
          products: action.payload,
        }
      }
      case SET_IN_CART: {
        return {
          ...state,
          cart: [],
        }
      }
        default:
          return state
      }
  }

export default reducer
