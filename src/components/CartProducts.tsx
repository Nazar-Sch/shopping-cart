import React from "react"
import { useDispatch } from "react-redux"
import {
  makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  TextField,
} from "@material-ui/core"
import { changeAmountInCart, removeProductFromCart } from "../redux/actions"

const useStyles = makeStyles({
  root: {
    maxWidth: 545,
    margin: 15,
    padding: 15,
  },
  media: {
    minHeight: 140,
    maxHeight: 350,
  },
})

interface IProductCardProps {
  image: string
  title: string
  color: string
  price: string
  id: string
  amount: number
}
const CartProducts: React.FC<IProductCardProps> = ({
  image,
  title,
  color,
  price,
  id,
  amount,
}) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            $ {price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Color: {color}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <TextField
          id="outlined-number"
          label="Amount"
          type="number"
          value={amount}
          onChange={(e) => dispatch(changeAmountInCart(id, (parseFloat(e.target.value))))}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            inputProps: { min: 1 },
          }}
          variant="outlined"
        />        
        <Button
          size="small"
          data-testid="button-remove"
          variant="contained"
          color="primary"
          onClick={() => dispatch(removeProductFromCart(id))}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  )
}

export default CartProducts
