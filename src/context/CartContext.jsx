import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CartContext = createContext();




export const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([])
  const [count, setCount] = useState(cartData.length)

  useEffect(() => {
    async function rqst() {
      let res = await axios.get(`http://localhost:8080/cartItems`)
      let d = res.data;
      console.log(d)
      setCartData(d)
    }

    rqst()
  
    
  }, [count])
  



  return <CartContext.Provider value={{cartData,setCount,count}}>{children}</CartContext.Provider>;
};
