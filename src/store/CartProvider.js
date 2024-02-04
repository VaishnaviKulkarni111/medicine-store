import React,{useEffect, useState} from 'react'
import CartContext from './cart-context';
import axios from 'axios';

const CartProvider =(props) =>{
  const url = "https://crudcrud.com/api/ee4f9ce5c51d4852a29ac2d1a629a28f/cart"
    const [items,updateItems] =useState([]);

    const addItemHandler= async(item) =>{
      try{  
        let repeatItem = items.find((newItem) => newItem.title === item.title);

        if (repeatItem === undefined) {
          const response = await axios.post(url, {
            ...item, quantity: Number(item.quantity),
           });
          updateItems([...items, response.data]);
        } else {
          repeatItem.quantity += Number(item.quantity);
          await axios.put(`${url}/${repeatItem._id}`, {
            quantity: repeatItem.quantity,
          });
          updateItems([...items]);
        }
  }catch(err){
       console.log(err)
     }    
    }

    const removeItemHandler=async (item)=>{
      const updatedItems = [...items];
    // try{
    //   const ExistingItemIndex = updatedItems.findIndex(
    //     (newItem) => newItem.name === item.name
    //   );
    //   if (ExistingItemIndex !== -1) {
    //     if (updatedItems[ExistingItemIndex].quantity > 1) {
    //       updatedItems[ExistingItemIndex].quantity -= 1;
    //       await axios.put(
    //         `${url}/${updatedItems[ExistingItemIndex]._id}`,
    //         {
    //           quantity: updatedItems[ExistingItemIndex].quantity,
    //         });
    //         updateItems(updatedItems);
    //     } 
    //     else {
    //       await axios.delete(
    //         `${url}/${updatedItems[ExistingItemIndex]._id}`
    //       );
    //       updatedItems.splice(ExistingItemIndex,1);
    //     }
    //     updateItems(updatedItems);
    //   }

    // }catch(err){
    //  console.log(err)
    // }     
    }

    const resetCartHandler = () => {
      updateItems([]);
    }

    const getItem = async () => {
      try {
        const response = await axios.get(url);
         updateItems( response.data);
      } catch (error) {
        console.log("error fetching cart cart items", error);
      }
    };
    useEffect(() => {
      getItem();
    }, []);

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