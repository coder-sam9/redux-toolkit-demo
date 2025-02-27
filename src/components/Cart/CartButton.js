import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { changeShowCartStatus } from '../../store/slices/cartSlice';

const CartButton = (props) => {
  const dispatch=useDispatch()
  return (
    <button className={classes.button} onClick={()=>dispatch(changeShowCartStatus())}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
