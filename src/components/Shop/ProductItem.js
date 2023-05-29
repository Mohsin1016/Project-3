import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { itemAction } from '../Store/addToCart';

const ProductItem = (props) => {
  const dispatch = useDispatch();

  const addToCardHandler = ()=>{
    const item={
      title : props.title,
      price : props.price,
      description : props.description,
      id: props.id
    }
    dispatch(itemAction.addItemToCart(item));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{props.title}</h3>
          <div className={classes.price}>${props.price.toFixed(2)}</div>
        </header>
        <p>{props.description}</p>
        <div className={classes.actions}>
          <button onClick={addToCardHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
