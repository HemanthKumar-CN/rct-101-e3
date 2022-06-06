import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import React from "react";
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import Login from "./pages/Login";
import RequiredAuth from './hoc/RequiredAuth';
import Products from './components/Products/Products'
import Product from './components/Products/Product/Product';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/*" element={
          <RequiredAuth>
            <Home />
          </RequiredAuth>}>

          <Route path='products/*' element={<RequiredAuth><Products /></RequiredAuth>}>

            <Route path=":id" element={<RequiredAuth><Product /></RequiredAuth>} />

          </Route>

        </Route>

      </Routes>



    </div>
  );
}

export default App;
