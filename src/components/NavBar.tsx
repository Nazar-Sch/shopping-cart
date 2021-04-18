import React from "react"
import { Link } from "react-router-dom"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { AppBar, Toolbar, Typography, Badge } from "@material-ui/core"
import ShopingCart from "@material-ui/icons/ShoppingCart"

import { useSelector } from "react-redux"
import { getTotaProductsAmount } from "../redux/selectors"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: 20,
    },
    wrapper: {
      display: "flex",
      justifyContent: "space-around",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 2,
      color: "#fff",
      textDecoration: "none",
    },
  })
)

const NavBar: React.FC = () => {
  const classes = useStyles()
  const amountProducts = useSelector(getTotaProductsAmount)
  const amount = amountProducts
    .reduce((acc, cur) => acc + cur || 0, 0)
    .toFixed(0)

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.wrapper}>
          <Typography variant="h6">
            <Link className={classes.title} to="/">
              Products
            </Link>
          </Typography>
          <Typography variant="h6">
            <Link className={classes.title} to="/cart">
              <Badge badgeContent={amount}>
                <ShopingCart data-testid='icon-svg'/>
              </Badge>
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar
