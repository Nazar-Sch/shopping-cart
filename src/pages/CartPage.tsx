import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"

import { fetchedProducts } from "../redux/selectors"
import { fetchProducts } from "../redux/actions"
import ProductCard from "../components/ProductCard"
import SearchInput from "../components/SearchInput"
import SelectColor from "../components/SelectColor"

const CartPage = () => {
  return (
    <Container>
    <Grid container spacing={6}>
      <Grid item>

      </Grid>
      <Grid item>

      </Grid>
    </Grid>
    <h2>My cart</h2>
    <Grid container spacing={3}>
    </Grid>
  </Container>
  )
}

export default CartPage
