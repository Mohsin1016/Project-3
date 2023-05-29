import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { itemAction } from "../Store/addToCart";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const onAddHandler = () => {
    dispatch(itemAction.addItemToCart({
      id:props.item.id,
      title:props.item.title,
      price:props.item.price,
    }));
  };

  const onRemoveHandler = () => {
    dispatch(itemAction.removeItemToCart(props.item.id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{props.item.title}</h3>
        <div className={classes.price}>
          ${props.item.total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${props.item.price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{props.item.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={onRemoveHandler}>-</button>
          <button onClick={onAddHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
