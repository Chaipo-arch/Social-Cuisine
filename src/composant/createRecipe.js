import React, { Component } from 'react';
import { AppBar, Toolbar, TextField, Input , Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import logo from '../image/Logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './style/createRecipe.css';

class CreateRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],
      ingredientInput: '',
    };
  }

  handleEnterKeyPress = (event) => {
    if (event.key === 'Enter') {
      const { ingredientInput } = this.state;
      const { ingredients } = this.state;
      if (ingredientInput.trim() !== '' && ingredients.length < 12) {
        this.setState((prevState) => ({
          ingredients: [...prevState.ingredients, ingredientInput],
          ingredientInput: '',
        }));
      }else if(ingredientInput.trim() !== ''){
          alert('pas plus de 14 ingrédients vous pouvez les ajoutez à la description')
      }
    }
  };

  handleIngredientInputChange = (event) => {
    this.setState({
      ingredientInput: event.target.value,
    });
  };
  delete = (index) =>{
    const { ingredients } = this.state;
    const newIngredients = [...ingredients]; // Créer une nouvelle copie du tableau
    newIngredients.splice(index, 1);

    this.setState({
      ingredients: newIngredients,
    });
  }

  render() {
    const { ingredients, ingredientInput } = this.state;

    return (
      <div className="total">
        <div class="createRecipe">
          <div class="recipesAttribut">
            Nom de la recette :{' '}
            <TextField
              sx={{ width: '50%', backgroundColor: 'white', borderRadius: '10px', boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.3)', marginLeft: '15px' }}
            />
          </div>
          <div class="recipesAttribut">
            Ingrédient de la recette :
            <TextField
              value={ingredientInput}
              onKeyDown={this.handleEnterKeyPress}
              onChange={this.handleIngredientInputChange}
              inputProps={{ maxLength: 28 }}
              sx={{ width: '50%', backgroundColor: 'white', borderRadius: '10px', boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.3)', marginLeft: '15px' }}
            />
          </div>
          <div class="recipesAttribut">Ingrédients : </div>
          <div class="voisin">
            <div class='grid-container'>
                {ingredients.map((ingredient, index) => (
                <div key={index} class="recipeName" >
                    <div class="cadre" onClick={() => this.delete(index)}>{ingredient}</div>
                </div>
                ))}
            </div>
            <div class="upload" ><Input type="file"/></div>
            </div>
            <Link to=''>
                <div class="next"> Suivant </div>
            </Link>

        </div>
       
      </div>
    );
  }
}

export default CreateRecipe;
