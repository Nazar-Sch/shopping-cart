import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
});


interface IProductCardProps {
  image: string
  title: string
  color: string
  price: string
}
const ProductCard: React.FC<IProductCardProps> = ({
  image,
  title,
  color,
  price,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={title}
        />
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
        <Button size="small" variant="contained" color="primary">
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard
