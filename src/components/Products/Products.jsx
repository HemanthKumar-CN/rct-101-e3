import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { Link, Outlet } from "react-router-dom";
import { CartContext } from "../../context/CartContext";




const Products = () => {
  const {setCount,count,cartData}=useContext(CartContext);
  const [test, setTest] = useState(true)

  const [data, setData] = useState([])
  const [toggleCart, setToggleCart] = useState(false)

  useEffect(() => {

    async function rqst() {
      let res = await axios.get(`http://localhost:8080/products`)
      let d = res.data;
      // console.log(d)
      setData(d)
    }

    rqst()

  }, [])



console.log(cartData)





    async function handleclick(id) {
      
      let payload = {
        "productId": id,
        "count": 1,
        "id": id
      }

      let res = await axios.post(`http://localhost:8080/cartItems`, payload)
      let d = res.data;
      console.log(d)

      setCount(count+1);


    }











  return <div>{/* Code here */}
    <h1>Products</h1>
    <div style={{ display: "grid", gap:"20px" }}>

      
      {
        

        data.map(item => (
          <div style={{ border: "1px solid" }} key={item.id}>
            <p>{item.name}</p>
            <div>{item.description}</div>

            {test ? <Outlet/> :<Link to={`/products/${item.id}`}> <button onClick={() => handleclick(item.id)}>Add to cart</button></Link>}
            
            
          </div>
          
        ))
      }
      {/* <Outlet/> */}
    </div>
  </div>;
};

export default Products;
