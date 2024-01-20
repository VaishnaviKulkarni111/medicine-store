import { Fragment } from "react";
import classes from './Header.module.css';
import CartButton from "./CartButton";

const Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
            <h1> Medicine-Store App</h1>
            <CartButton  onShowCart={props.onShowCart}/>
        </header>
    </Fragment>
}

export default Header;