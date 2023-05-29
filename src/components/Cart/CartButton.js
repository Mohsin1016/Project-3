import classes from './CartButton.module.css';
import { useDispatch,useSelector } from 'react-redux';
import { cartActions } from '../Store/ToggleCart';
const CartButton = (props) => {
  const dispatch = useDispatch();
 const totalQuantity = useSelector(state => state.item.totalQuantity);
  const toggleCartHandler = ()=>{
       dispatch(cartActions.toggle());
  };
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
