import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  Container,
  Grid,
  Typography
} from '@material-ui/core'

import { fetchedProducts } from "../redux/selectors"
import { addProductToCart, fetchProducts } from "../redux/actions"
import ProductCard from "../components/ProductCard"
import SearchBar from "../components/SearchBar"

const ProductsPage = () => {
  const [searchValue, setSearchValue] = useState<string>("")
  const [selectedColor, setSelectedColor] = useState<string>("")

  const dispatch = useDispatch()
  const products: IProduct[] = useSelector(fetchedProducts)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  const colors = [...new Set(products.map((e) => e.color))]

  const filteredListProducts = () => {
    const serachedValue = searchValue.toLowerCase()
    const filtered = products.filter((item) => {
      const filterbyName = item.name.toLowerCase().includes(serachedValue)
      const filterbyColor = item.color.includes(selectedColor)
      return filterbyName && filterbyColor
    })
    return filtered
  }

  return (
    <Container>
      <Typography variant="h4">Products</Typography>
      <SearchBar
        searchValue={searchValue}
        colors={colors}
        selectedColor={selectedColor}
        handleChangeSearchValue={(value: string) => setSearchValue(value)}
        handleChangeColorValue={(value: string) => setSelectedColor(value)}
      />
      <Grid container spacing={2}>
        {filteredListProducts().map((item) => (
          <Grid item xs={3} key={item.id}>
            <ProductCard
              title={item.name}
              image={item.image}
              price={item.price}
              color={item.color}
              id={item.id}
              addToCart={(id: string) => dispatch(addProductToCart(id))}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default ProductsPage
