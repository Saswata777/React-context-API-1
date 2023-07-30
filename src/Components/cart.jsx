import React from 'react'
import SingleProducts from './singleProducts'
import './style.css';
import { ChakraProvider } from '@chakra-ui/react'
import { useEffect } from 'react';
import { useState } from 'react';

const Cart = ({cart, setCart}) => {
  
  const[total, setTotal] = useState()

  useEffect(()=>{
      setTotal(cart.reduce(function(acc, curr){
        return acc = acc + Number(curr.price) ;
    }, 0/* Iniitialising the value of acc*/)) 
  },[cart])
  

  return (
      
    <ChakraProvider>
    <div className='Total_price'>Total: {total}</div>
    <div className='productNo'>No of product: {cart.length}</div>
        <div className='productPage'>
          {cart.map((product, index) => <SingleProducts  product={product}  cart={cart} setCart={setCart} key={index} />)}
        </div>
    </ChakraProvider>
  )
}

export default Cart