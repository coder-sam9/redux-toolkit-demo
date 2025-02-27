import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { addToCart } from '../../store/slices/cartSlice';

const ProductItem = ({item}) => {
  const { title, price, description,quantity } = item;
  const dispatch=useDispatch();

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={()=>dispatch(addToCart({...item,quantity:quantity+1}))}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
