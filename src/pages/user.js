import React, { useState } from 'react';
import axios from 'axios';
import logo from '../image/Logo.png';
import './Home.css';
import { AppBar, Toolbar, Typography, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const bgColor = "#CBF6BD";
const font1 = "Grand Hotel";
const font2 = "Eczar";
const mainColor = "#10654E";
const secondaryColor = "#9BC472";
const tertiaryColor = "#F9C202";

function MonComposant({ handleButtonClick, logged ,}) {
 

  var  contenu = <Button onClick={handleButtonClick} color="inherit" sx={{ fontFamily: 'Grand Hotel', fontSize: '40px', textTransform: "none", textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)", boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.3)' }}> Se Connecter </Button>;
  

  return contenu;
}

const user =() => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [logged, setLogged ] = useState(false);

  const handleButtonClick = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConnection = () => {
    console.log(formData);
    setFormData({ username: '', password: '' });
    setPopupVisible(false);
    axios.get(`http://localhost:8000/connexion/${formData.username}/${formData.password}`)
      .then(response => {
        console.log(response.data.userID);
        if (response.data.userID > 0) {
          setLogged(true);
        }
      })
      .catch(error => {
        console.log(formData.username);
      });
  };

  return (
    <div className="App">
      <AppBar position="static" className="Hotbar" sx={{ backgroundColor: mainColor }}>
        <Toolbar className='Toolbar'>
          <Button color="inherit"> <img src={logo} className="App-logo" alt="logo" /> </Button>
          <Typography className="hotbar" variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center', fontFamily: font1, fontSize: '60px', textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)" }}> Social-Cuisine </Typography>
          {!logged ? (
          <MonComposant handleButtonClick={handleButtonClick} logged={logged} />
          ) : (
           <Button ><svg color="#FFF" xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-person-square" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"/>
          </svg></Button>
          )}
          <Dialog open={popupVisible} onClose={closePopup}>
            <DialogContent sx={{ backgroundColor: bgColor }}>
              <form>
                <label>
                  Nom d'utilisateur:
                  <input type="text" name="username" value={formData.username} onChange={handleChange} />
                </label>
                <br />
                <label>
                  Mot de passe:
                  <input type="password" name="password" value={formData.password} onChange={handleChange} />
                </label>
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleConnection} color="inherit" sx={{ fontFamily: 'Grand Hotel', fontSize: '40px', textTransform: "none", textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)", boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.3)' }}> Se Connecter </Button>
              <Button onClick={closePopup} color="inherit" sx={{ fontFamily: 'Grand Hotel', fontSize: '40px', textTransform: "none", textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)", boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.3)' }}> créer un compte </Button>
            </DialogActions>
          </Dialog>
        </Toolbar>
      </AppBar>
      <div className='Recherche'>
        <TextField id='schearch' label='Rechercher une recette' variant='outlined' sx={{ width: '50%', backgroundColor: "white", borderRadius: '10px', boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.3)' }} />
      </div>
      <div className='TopRecette'>
        <Typography className="TopRecette" variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left', fontFamily: font2, fontSize: '30px', paddingTop: "1.75%", paddingLeft: "0.75%", textDecoration: "underline", color: mainColor }}> Top des recettes de la semaine : </Typography>
      </div>
    </div>
  );
}

export default user;
