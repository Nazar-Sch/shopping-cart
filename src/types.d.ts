type TProduct = {
  id: number
}

type TProductAction = {
  type: string
  payload: [TProduct]
}

interface IProductsState {
  products: any,
}

type DispatchType = (args: TProductAction) => TProductAction