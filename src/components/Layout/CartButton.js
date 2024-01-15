import classes from './CartButton.module.css';
import greenCart from '../../assets/greenCart.png';

const CartButton = (props) => {
    return(
        ( <button className={classes.button} onClick={props.onClickk}>
            {/* <span className={classes.icon}>
            <img src={greenCart}  alt='green cart logo' /> 
            </span> */}
            <span> Your Cart</span>
            <span className={classes.badge}>{2}</span>
            </button> )
    )
};

export default CartButton;