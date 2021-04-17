import React from "react"
import { Switch, Route } from "react-router-dom"
import CartPage from "../pages/CartPage"
import ProductsPage from "../pages/ProductsPage"

const Layout: React.FC = () => (
  <Switch>
    <Route path="/cart">
      <CartPage />
    </Route>
    <Route path="/">
      <ProductsPage />
    </Route>
  </Switch>
)

export default Layout
