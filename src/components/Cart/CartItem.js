import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { addToCart, removeFromCart } from '../../store/slices/cartSlice';

const CartItem = (props) => {
  const { title, quantity, price,total=quantity*price } = props.item;
  const dispatch=useDispatch();

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={()=>dispatch(removeFromCart(props.item))}>-</button>
          <button onClick={()=>dispatch(addToCart(props.item))}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
