import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";



// use react-router Link or NavLink

const Navbar = () => {


  const {isAuth,logout}=useContext(AuthContext);

  const navigate=useNavigate();

  const {cartData}=useContext(CartContext);



  return (
    <div style={{display: "flex", justifyContent: "space-between"}} data-cy="navbar">
      <Link to="/" data-cy="navbar-home-link">Logo</Link>
      <span data-cy="navbar-cart-items-count">{/* count here */}Cart: {(isAuth) ? cartData.length : null} </span>
      <button onClick={()=> {
        if(isAuth)
        {
          logout()

        }
        else
        {
          navigate("/login")
        }
      }} data-cy="navbar-login-logout-button"> {isAuth ? "Logout" : "Login"} </button>
    </div>
  );
};

export default Navbar;
