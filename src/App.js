import React, { useState } from 'react';
import axios from 'axios';
import logo from './image/Logo.png';
import './App.css';
import  Home  from "./pages/HomePage";
import user from "./pages/user";
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Recipe from "./pages/Recipe"
import CreateRecipe from "./pages/createRecipe"
import userCreate from "./pages/userCreate"
import Test from "./pages/Test";
import TopBar from './composant/topBar'; // Import the TopBar component
import { LoggedProvider } from './context/LoggedContext'; // Vérifiez ce chemin d'importation

function App() {
  return(
    <LoggedProvider>
    <div className="App">
    <BrowserRouter>
      <TopBar /> {/* Include the TopBar component */}
      <Routes>
        <Route path="/test" element={<Test/>}></Route>
        <Route path="/createRecipe" element={<CreateRecipe/>}></Route>
        <Route path="/userCreate" element={<userCreate/>}></Route>
        <Route path="/Recipe" element={<Recipe/>}></Route>
        <Route path="*" element={<Home/>}></Route>
        <Route path="/user" element={<user/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
    </LoggedProvider>
  );
}

export default App;
