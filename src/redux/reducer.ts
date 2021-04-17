import {
  GET_PRODUCTS_SUCCESS,
  ADD_TO_CART,
  CHANGE_AMOUNT_IN_CART,
  REMOVE_FROM_CART,
} from "./actionTypes"

const initialState: TState = {
  products: [],
  cart: JSON.parse(localStorage.getItem('cart') as string) || [],
  total: JSON.parse(localStorage.getItem('total') as string) || 0,
}

const reducer = (state = initialState, action: TAction) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        products: action.payload,
      }
    }
    case ADD_TO_CART: {
      const addedItem = state.products
        .find((product) => product.id === action.payload) as IProduct
      const existed = state.cart
        .find((product) => product.id === action.payload) as IProduct

      if (existed) {
        if (addedItem.amount) {
          addedItem.amount += 1
        } else {
          existed.amount += 1
        }

        localStorage.setItem('cart', JSON.stringify(state.cart))
        localStorage.setItem('total', JSON.stringify(state.total + parseFloat(addedItem.price)))
        
        const newTotalAmountProducts = state.cart.length + existed.amount
    
        return {
          ...state,
          total: state.total + parseFloat(addedItem.price),
          totalItemsInCart: newTotalAmountProducts
        }
      } else {
        addedItem.amount = 1

        const itemsInCart = [...new Set(
          [...state.cart, { ...addedItem, total: state.total + parseFloat(addedItem.price) }]
        )]
        localStorage.setItem('cart', JSON.stringify(itemsInCart))
        localStorage.setItem('total', JSON.stringify( state.total + parseFloat(addedItem.price)))

        return {
          ...state,
          cart: [...state.cart, addedItem],
          total: state.total + parseFloat(addedItem.price),
        }
      }
    }
    case REMOVE_FROM_CART: {
      const itemToRemove = state.cart
        .find((product) => product.id === action.payload) as IProduct
      const newCart = state.cart
        .filter((product) => product.id !== action.payload)

      const itemPrice = parseFloat(itemToRemove.price)
      const newTotal = state.total - itemPrice * itemToRemove.amount

      localStorage.setItem('cart', JSON.stringify([...new Set(newCart)]))
      localStorage.setItem('total', JSON.stringify(newTotal))

      return {
        ...state,
        cart: newCart,
        total: newTotal,
      }
    }
    case CHANGE_AMOUNT_IN_CART: {
      const product = state.cart.find(
        (product) => product.id === action.payload.id
      ) as IProduct

      product.amount = action.payload.amount

      if (product.amount === 0) {
        let newItems = state.cart.filter(item=>item.id !== action.payload.id)
        let newTotal = state.total - parseFloat(product.price)

        return{
            ...state,
            cart: newItems,
            total: newTotal
        }
      }

      const newPriceTotal = state.cart.reduce((acc, item) => acc + parseFloat(item.price) * item.amount, 0)
      localStorage.setItem('cart', JSON.stringify([...new Set([...state.cart])]))
      localStorage.setItem('total', JSON.stringify(newPriceTotal))

      return {
        ...state,
        total: newPriceTotal
      }
    }
    default:
      return state
  }
}

export default reducer
