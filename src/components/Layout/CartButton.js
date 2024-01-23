import classes from './CartButton.module.css';
import greenCart from '../../assets/greenCart.png';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';

const CartButton = (props) => {
    const cartCtx = useContext(CartContext);
    let quantity=0;
    cartCtx.items.forEach(item=>{
        quantity=quantity+ Number(item.quantity)

    });

  

    return(
        ( <button className={classes.button} onClick={props.onShowCart}>
            
            <img src={greenCart}  alt='green cart logo' /> 
            
            <span> Your Cart</span>
            <span className={classes.badge}>{quantity}</span>
            </button> )
    )
};

export default CartButton;