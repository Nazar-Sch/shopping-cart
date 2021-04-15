import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchedProducts } from '../redux/selectors'
import { fetchProducts } from '../redux/actions'

const ProductsPage = () => {
  const dispatch = useDispatch()
  const products = useSelector(fetchedProducts)
  
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  console.log(products)
  return (
    <h2>ProductsPage</h2>
  );
}

export default ProductsPage
