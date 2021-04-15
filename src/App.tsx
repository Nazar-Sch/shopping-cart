import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { AppBar, Toolbar, Typography } from "@material-ui/core"

import ProductsPage from "./pages/ProductsPage"
import CartPage from "./pages/CartPage"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    wrapper: {
      display: 'flex',
      justifyContent: 'space-around'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 2,
      color: '#fff',
      textDecoration: 'none',
    },
  })
)

export default function App() {
  const classes = useStyles()

  return (
    <Router>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.wrapper}>
          <Typography variant="h6">
            <Link className={classes.title}to="/">Products</Link>
          </Typography>
          <Typography variant="h6">
            <Link className={classes.title}to="/cart">My cart</Link>
          </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <div>
        <Switch>
          <Route path="/cart">
            <CartPage />
          </Route>
          <Route path="/">
            <ProductsPage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
