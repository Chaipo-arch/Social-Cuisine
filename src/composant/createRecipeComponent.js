import React, { Component } from 'react';
import { AppBar, Toolbar, TextField, Input , Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import logo from '../image/Logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './style/createRecipe.css';

class createRecipeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],
      ingredientInput: '',
      numberIngredient : [],
      valeur : [],
    };
  };
  
  add = (index) =>{
    const { numberIngredient } = this.state;
    const newnumberIngredient = [...numberIngredient];
    newnumberIngredient[index] = newnumberIngredient[index] + 1;

    this.setState({
      numberIngredient: newnumberIngredient,
    });
  };
  
  minus = (index) => {
    const { numberIngredient } = this.state;
    const newnumberIngredient = [...numberIngredient];
    newnumberIngredient[index] = newnumberIngredient[index] - 1;
    
    this.setState({
      numberIngredient: newnumberIngredient,
    });
    if(newnumberIngredient[index] == 0){
      this.delete(index);
    }
  };
  changeVal = (index) =>{
    var { valeur } = this.state;
    var value = valeur[index];
    if(valeur[index] === "X"){
      value = "L de" ;
    }else if (valeur[index] === "L de"){
      value = "Kg de" ;
    }else if (valeur[index] === "Kg de"){
      value = "X" ;
    }
    this.setState({
      valeur : value,
    });
  };
  delete = (index) =>{
    const { ingredients , numberIngredient } = this.state;
    const newIngredients = [...ingredients]; // Créer une nouvelle copie du tableau
    const newNumberIngredients = [...numberIngredient]; // Créer une nouvelle copie du tableau
    newIngredients.splice(index, 1);
    newNumberIngredients.splice(index, 1);

    this.setState({
      ingredients: newIngredients,
      numberIngredient : newNumberIngredients,
    });
  };

  handleEnterKeyPress = (event) => {
    if (event.key === 'Enter') {
      const { ingredientInput } = this.state;
      const { ingredients } = this.state;
      const { numberIngredient} = this.state;
      const { valeur } = this.state;
      if (ingredientInput.trim() !== '' && ingredients.length < 12) {
        this.setState((prevState) => ({
          ingredients: [...prevState.ingredients, ingredientInput],
          ingredientInput: '',
          numberIngredient :  [...prevState.numberIngredient, 1],
          valeur : [...prevState.valeur,"X"],
        }));
      }else if(ingredientInput.trim() !== ''){
          alert('pas plus de 12 ingrédients vous pouvez les ajoutez à la description')
      }
    }
  };

  handleIngredientInputChange = (event) => {
    this.setState({
      ingredientInput: event.target.value,
    });
  };

 

  render() {
    const { ingredients, ingredientInput,numberIngredient ,valeur } = this.state;

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
                    <div class="cadre">
                      <div class="buttonPlus"onClick={this.add.bind(this, index)}>+</div>
                      <div class="donneIngredient" onClick={this.changeVal.bind(this,index)}> 
                         {numberIngredient[index]} &nbsp;
                         {valeur}&nbsp;
                        {ingredient}  
                      </div>
                      <div class="buttonMoins" onClick={this.minus.bind(this, index)} >-</div> 
                   </div>
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

export default createRecipeComponent;
