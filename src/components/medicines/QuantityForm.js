import React, {useContext,useState} from 'react';
import classes from'./Quantity.module.css';
import Input from '../UI/Input';
import CartContext from '../../store/cart-context';
const QuantityForm = (props) => {
  
  const cartCtx = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const inputChangeHandler = (event) => {
    event.preventDefault();
    setQuantity(event.target.value); 
  };

  const addItemHandler = (event) => {
    event.preventDefault();
    if (!isNaN(quantity) && quantity > 0) {
      cartCtx.addItem({ ...props.item, quantity: quantity });
    }
  };

 return (
   <form className={classes.form}  onChange={inputChangeHandler}>
   <Input  input={{
    id: 'amount_' + props.id,
    type: 'number',
    min:'1', max:'5',
    step: '1',
    defaultValue: quantity.toString(), 
   
    
   }}  />
    <button onClick={addItemHandler} className={classes.addBtn}>Add to Cart</button>
   </form>
 )
}

export default QuantityForm;