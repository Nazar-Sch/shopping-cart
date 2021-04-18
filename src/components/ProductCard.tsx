import React from "react"
import {
  makeStyles,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core"

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
  addToCart: (id: string) => void
}
const ProductCard: React.FC<IProductCardProps> = ({
  image,
  title,
  color,
  price,
  id,
  addToCart,
}) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={image}
        title={`Image: ${title}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="h6" component="p">
          $ {price}
        </Typography>
        <Typography variant="body1" component="p">
          Color: {color}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          data-testid="button-add"
          size="small"
          variant="contained"
          color="primary"
          onClick={() => addToCart(id)}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard
