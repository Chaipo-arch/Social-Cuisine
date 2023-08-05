import React, { Component } from 'react';
import { AppBar, Toolbar, TextField,Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import logo from '../image/Logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './style/createRecipe.css';
class createRecipe extends Component {

    render(){
        var ingredients= '';
        const handleEnterKeyPress = (event) => {
            if (event.key === 'Enter') {
              ingredients +='<div class="recipeName"><div class="cadre"> Exemple </div></div> ';
            }
          };
        return(
            <div className="total">
                <div class="createRecipe">
                    <div class="recipeName">Nom de la recette :  <TextField  sx={{ width: '50%', backgroundColor: "white", borderRadius: '10px', boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.3)' , marginLeft: '15px' }} ></TextField></div>
                    <div class="recipeName">Ingrédient de la recette : <TextField       onKeyDown={handleEnterKeyPress} sx={{ width: '50%', backgroundColor: "white", borderRadius: '10px', boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.3)' , marginLeft: '15px'}} ></TextField> </div>
                    <div class="recipeName">Ingrédients : </div>
                    <div class="recipeName"> <div class="cadre"> Exemple </div> <div class="cadre"> exemple </div> </div>
                    <div class="recipeName"><div class="cadre"> exemple </div> <div class="cadre"> exemple </div> </div>
                    <div class="recipeName"><div class="cadre"> exemple </div> <div class="cadre"> exemple </div>  </div>
                    <div class="recipeName"><div class="cadre"> exemple </div> <div class="cadre"> exemple </div> </div>
                {ingredients}
                </div>
            </div>

        );
    }
}
export default createRecipe;