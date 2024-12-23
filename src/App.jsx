import { useState } from "react";
import "./App.css";
import Home from "./Component/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import PokemonCard from "./Component/PokemonCard/PokemonCard";
import {Routes,Route} from 'react-router-dom'
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import Signin from "./Component/Auth/sign_in/Signin";
import Signup from "./Component/Auth/sign_up/Signup";


function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/pokemon" element={<PrivateRoute><PokemonCard/></PrivateRoute>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/sigin" element={<Signin/>}/>
    </Routes>
      
    </>
  );
}

export default App;
