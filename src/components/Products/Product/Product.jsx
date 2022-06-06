import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const Product = () => {

  const {cartData}=useContext(CartContext);
  // console.log(cartData)
  // console.log("v")

  let params=useParams()
  // console.log("Prms",params)

  const [indProd, setIndProd] = useState({})

  useEffect(() => {
    async function roi()
    {
      let res=await axios.get(`http://localhost:8080/products/${params.id}`)
      let d=res.data;
      console.log(d)
      setIndProd(d)

    }
    
    
  }, [params.id])
  
  // console.log(indProd)

  // Note: this id should come from api
  // const product = { id: 1 };
  return (
    <div data-cy={`product-${params.id}`}>
      <h3 data-cy="product-name"></h3>
      <h6 data-cy="product-description"></h6>
      <button data-cy="product-add-item-to-cart-button">Add item to cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button">+</button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
            
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button">-</button>
        <button data-cy="product-remove-cart-item-button">Remove</button>
      </div>
    </div>
  );
};

export default Product;
