
import './App.css';
import Header from './Components/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/home';
import Cart from './Components/cart';

import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([])
  return (
    <BrowserRouter>
      <Header />
      <Routes>
            <Route path='/' element={<Home cart={cart} setCart={setCart} />} />
                
            <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
