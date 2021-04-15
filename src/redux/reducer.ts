import { GET_PRODUCTS_SUCCESS } from "./actionTypes"

const initialState: IProductsState = {
  products: [],
}

const reducer = (state: IProductsState = initialState, action: TProductAction) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        products: action.payload,
      }
    }
    default: 
      return state
  }
}

export default reducer
