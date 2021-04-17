import React from "react"
import { useSelector } from "react-redux"
import {
  Container,
  Grid,
  Typography,
} from "@material-ui/core"

import { getCart, getTotal } from "../redux/selectors"
import CartProducts from "../components/CartProducts"

const CartPage = () => {
  const cart = useSelector(getCart)
  const total: number = useSelector(getTotal)

  return (
    <Container>
      {
        cart.length !== 0
        ? (
          <>
          <Typography variant="h4">My cart</Typography>
            <Grid container spacing={3}>
              {cart.map((item) => (
                <Grid item xs={4} key={item.id}>
                  <CartProducts
                    image={item.image}
                    title={item.name}
                    color={item.color}
                    price={item.price}
                    id={item.id}
                    amount={item.amount}
                  />
                </Grid>
              ))}
            </Grid>
            <Grid container spacing={6}>
              <Grid item xs={4}>
                { total ? <Typography variant="h2" gutterBottom>Total: $ {total || 0}</Typography> : null}
              </Grid>
            </Grid>
          </>
        )
        : <Typography variant="h5">My cart is empty :(</Typography>
      }
    </Container>
  )
}

export default CartPage
