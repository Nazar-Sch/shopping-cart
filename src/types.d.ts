interface IProduct {
  id: string
  name: string
  color: string
  description: string
  price: string
  image: string
  amount: number
}

type TAction = {
  type: string
  payload: any
}

type TState = {
  products: Array<IProduct>
  cart: Array<IProduct>
  total: number
}

type DispatchType = (args: TAction) => TAction
