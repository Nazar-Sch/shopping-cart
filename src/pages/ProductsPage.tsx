import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"

import { fetchedProducts } from "../redux/selectors"
import { fetchProducts } from "../redux/actions"
import ProductCard from "../components/ProductCard"
import SearchInput from "../components/SearchInput"
import SelectColor from "../components/SelectColor"

const ProductsPage = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [selectedColor, setSelectedColor] = useState('')

  const dispatch = useDispatch()
  const products: TProduct[] = useSelector(fetchedProducts)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const colors = [...new Set(products.map((e) => e.color))]

  const handleChangeSearchValue = (value: string) => {
    setSearchValue(value)
  }
  const handleChangeColorValue = (value: string) => {
    setSelectedColor(value)
  }

  const filteredListProducts = () => {
    const serachedValue = searchValue.toLowerCase()
    const filtered = products.filter((item) =>  {
      const filterbyName = item.name.toLowerCase().includes(serachedValue)
      const filterbyColor = item.color.includes(selectedColor)
      return filterbyName && filterbyColor
    })
    return filtered
  }

  return (
    <Container>
      <Grid container spacing={6}>
        <Grid item>
          <SearchInput 
            value={searchValue}
            handleChangeValue={handleChangeSearchValue}
          />
        </Grid>
        <Grid item>
          <SelectColor 
            colors={colors} 
            handleChangeValue={handleChangeColorValue}
            value={selectedColor}
          />
        </Grid>
      </Grid>
      <h2>Products</h2>
      <Grid container spacing={3}>
        {filteredListProducts().map((item) => (
          <Grid item xs={4} key={item.id}>
            <ProductCard
              title={item.name}
              image={item.image}
              price={item.price}
              color={item.color}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default ProductsPage
