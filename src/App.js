
import { useState } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Form from './components/medicines/Form';
import MedicineList from './components/medicines/MedicineList';
import CartProvider from './store/CartProvider';
import Cart from './cart/Cart';
import MedicineProvider from './store/MedicineProvider';


function App() {
  const [cartIsShown, setCartIsShown]= useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
  };
  const hideCartHandler = () => {
    setCartIsShown(false)
  };
  return (
    <CartProvider>
      <MedicineProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
    <Header onShowCart={showCartHandler}/>
      <Form/>
      <MedicineList />

      </MedicineProvider>
    </CartProvider>

    
  );
}

export default App;
