import React,{useEffect, useState} from 'react'
import CartContext from './cart-context';
import axios from 'axios';

const CartProvider =(props) =>{
  const url = "https://crudcrud.com/api/4e78268dbacd45829f7749eb924845f5/cart"
  const  [items, updateItems] = useState([]);
  console.log('items' ,items)
  const addItemHandler = async (item) => {
      let repeatItem = items.find((newItem) => newItem.name === item.name);

      if (repeatItem === undefined) {
        updateItems([...items, { ...item, quantity: Number(item.quantity) }]);
        const response = await axios.post(url, {
          ...props.item.value, quantity: Number(item.quantity),
         });
         console.log('res', response)
      } else {
        repeatItem.quantity += Number(item.quantity);
        updateItems([...items]);
      }
  };

  const removeItemHandler = (item) => {
      const updatedItems = [...items];

      const foundItemIndex = updatedItems.findIndex(
        (newItem) => newItem.name === item.name
      );
  
      if (foundItemIndex !== -1) {
        if (updatedItems[foundItemIndex].quantity > 1) {
          updatedItems[foundItemIndex].quantity -= 1;
        } else {
          updatedItems.splice(foundItemIndex, 1);
        }
  
        updateItems(updatedItems);
      }
  };


    const ListContext={
        items:items,
        addItem:addItemHandler,
        removeItem:removeItemHandler, 
        // resetCart: resetCartHandler,
    }

    return(
        <CartContext.Provider value={ListContext}>
            {props.children}
        </CartContext.Provider>

    )
}

export default CartProvider