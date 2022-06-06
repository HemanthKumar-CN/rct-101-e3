import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {

    const [loginCred, setLoginCred] = useState({});

    const {isAuth,login}=useContext(AuthContext);

    

    function handleLog(e)
    {
      const {name, value}=e.target;
      setLoginCred({
        ...loginCred,
        [name]:value
      }) 
    }




  return (
    <div>
      <input onChange={handleLog} data-cy="login-email" name="email" type="email" placeholder="email" />
      <br />
      <input onChange={handleLog} name="password" type="password" data-cy="login-password" placeholder="password" />
      <br />
      <button onClick={()=> {
        console.log(loginCred)
        login()
      }} data-cy="login-submit">Login</button>
    </div>
  );
};

export default Login;
