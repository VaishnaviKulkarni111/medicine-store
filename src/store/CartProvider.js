import React,{useState} from 'react'
import CartContext from './cart-context';

const CartProvider =(props) =>{
    const [items,updateItems] =useState([]);

    const addItemHandler=(item)=>{
        let repeatItem = items.find((newItem) => newItem.name === item.name);
       
        if (repeatItem === undefined) {
          updateItems([...items, { ...item, quantity: Number(item.quantity) }]);
        } else {
          repeatItem.quantity += Number(item.quantity);
           updateItems([...items]);
        }
    }

    const removeItemHandler=(item)=>{
        const updatedItems = [...items];

        const ExistingItemIndex = updatedItems.findIndex(
          (newItem) => newItem.name === item.name
        );
        if (ExistingItemIndex !== -1) {
          if (updatedItems[ExistingItemIndex].quantity > 1) {
            updatedItems[ExistingItemIndex].quantity -= 1;
          } 
          else {
            updatedItems.splice(ExistingItemIndex,1);
          }
          updateItems(updatedItems);
        }
    }

    const resetCartHandler = () => {
      updateItems([]);
    }

    const ListContext={
        items:items,
        addItem:addItemHandler,
        removeItem:removeItemHandler, 
        resetCart: resetCartHandler,
    }

    return(
        <CartContext.Provider value={ListContext}>
            {props.children}
        </CartContext.Provider>

    )
}

export default CartProvider