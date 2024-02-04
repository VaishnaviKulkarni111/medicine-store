import React,{useEffect, useState} from 'react'
import CartContext from './cart-context';
import axios from 'axios';

const CartProvider =(props) =>{
  const  [items, setItems] = useState([]);
  const url = "https://crudcrud.com/api/191a987ce4a84f1a91a278421f407f0c/cart"
   

    const addItemHandler = async (item) => {
      try{  
        let repeatItem = items.find((newItem) => newItem.title === item.title);

        if (!repeatItem) {
          const response = await axios.post(url, { ...item, quantity: Number(item.quantity)
           });
          
          setItems([...items, response.data]);
        } else {
          repeatItem.quantity += Number(item.quantity);
          await axios.put(`${url}/${repeatItem._id}`, {
            quantity: repeatItem.quantity,
          });
          setItems([...items]);
        }
  }catch(err){
       console.log(err)
     }    
    };

    const removeItemHandler = async (item) => {
        const updatedItems = [...items];
try{
  const foundItemIndex = updatedItems.findIndex(
    (newItem) => newItem.title === item.title
  );

  if (foundItemIndex !== -1) {
    if (updatedItems[foundItemIndex].quantity > 1) {
      updatedItems[foundItemIndex].quantity -= 1;
      await axios.put(
        `${url}/${updatedItems[foundItemIndex]._id}`,
        {
          quantity: updatedItems[foundItemIndex].quantity,
        }
      );
      setItems(updatedItems);
    } 
    else  {
      await axios.delete(
        `${url}/${updatedItems[foundItemIndex]._id}`
      );
      updatedItems.splice(foundItemIndex, 1);
      setItems(updatedItems);
    }
  }
  }catch(err){
  console.log(err)
  }       
    };

  
    const getItem = async () => {
      try {
        const response = await axios.get(url);
         setItems( response.data);
      } catch (error) {
        console.log( error);
      }
    };

    useEffect(() => {
      getItem();
    }, []);
    function resetCartHandler(){
      setItems([])
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