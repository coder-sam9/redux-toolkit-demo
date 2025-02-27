import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { changeShowCartStatus } from '../../store/slices/cartSlice';

const CartButton = (props) => {
  const dispatch=useDispatch();
  const {cartItems}=useSelector(state=>state.cart)
  return (
    <button className={classes.button} onClick={()=>dispatch(changeShowCartStatus())}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItems.length}</span>
    </button>
  );
};

export default CartButton;
