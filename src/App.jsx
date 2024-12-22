import { useState } from "react";
import "./App.css";
import Sigin from "./Component/Auth/SIgnin/sigin";
import SIgnUp from "./Component/Auth/Signup/SIgnUp";
import Home from "./Component/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import PokemonCard from "./Component/PokemonCard/PokemonCard";
import {Routes,Route} from 'react-router-dom'
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/pokemon" element={<PrivateRoute><PokemonCard/></PrivateRoute>}/>
      <Route path="/signup" element={<SIgnUp />}/>
      <Route path="/sigin" element={<Sigin />}/>
    </Routes>
      
    </>
  );
}

export default App;
