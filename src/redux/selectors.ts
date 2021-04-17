export const fetchedProducts = (state: TState) => state.products
export const getCart = (state: TState) => state.cart
export const getTotal = (state: TState) => state.total
export const getTotaProductsAmount = (state: TState) => state.cart.map((item) => item.amount)
