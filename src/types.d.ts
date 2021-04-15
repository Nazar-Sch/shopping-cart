type TProduct = {
  id: string
  name: string
  color: string
  description: string
  price: string
  image: string
}

type TProductAction = {
  type: string
  payload: Array<TProduct>
}

type TCartProduct = {
  product: TProduct
  amount: string
}

interface IProductsState {
  products: Array<TProduct>
  cart: Array<TCartProduct>
}

type DispatchType = (args: TProductAction) => TProductAction