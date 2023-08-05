import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, Menu, MenuItem } from '@mui/material'; // Add Menu and MenuItem imports
import logo from '../image/Logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import LeftBar from '../composant/LeftBar';
import LoggedContext from '../context/LoggedContext'; // Importe le contexte LoggedContext
class TopBar extends Component {

  static contextType = LoggedContext;

  constructor(props) {
    super(props);
    this.state = {
      connectionPopUp: false,
      formData: {
        username: '',
        password: ''
      },
      anchorElUser: null, // Initialize anchorElUser state for the user menu
      logged: false,
      open: false,
      options : [
        'Show some love to MUI',
        'Show all notification content',
        'Hide sensitive notification content',
        'Hide all notification content',
      ]
    };
  }

  handleConnectionButton = () => {
    this.setState({ connectionPopUp: true });
  };

  closeConnectionPopUp = () => {
    this.setState({ connectionPopUp: false });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      formData: { ...prevState.formData, [name]: value }
    }));
  };

  handleConnection = () => {
    const { username, password } = this.state.formData;
    
    if (username.trim() === '' || password.trim() === '') {
      alert("Veuillez remplir tous les champs du formulaire.");
      return;
    }
    console.log(this.state.formData);
    this.setState({ formData: { username: '', password: '' } });
    this.setState({ connectionPopUp: false });
    axios.get(`https://localhost:44330/Connexion/connexion/${this.state.formData.username}/${this.state.formData.password}`)
      .then(response => {
        const data = response.data;


        // Accède à la valeur de userId et affiche-la dans la console
        console.log( data[0].userId);
        if ( data[0].userId > 0) {
          this.context.setLogged(true); // Met à jour l'état logged dans le contexte
        } 
      })
      .catch(error => {
        console.log(this.state.formData.username);
      });
  };
  handleUserButton = (event) => {
    this.setState({ anchorElUser: event.currentTarget });
  };

  handleCloseUserMenu = () => {
    this.setState({ anchorElUser: null });
  };

  logOut = () => {
    this.context.setLogged(false);

  }
  // ... Rest of your component code ...
  
  render() {
    const { connectionPopUp, formData, options, anchorElUser } = this.state; // Destructuring the state variables here
    const { logged } = this.context; // Accède à l'état logged du contexte
    const bgColor = "#CBF6BD";
    const font1 = "Grand Hotel";
    const font2 = "Eczar";
    const mainColor = "#10654E";
    const secondaryColor = "#9BC472";
    const tertiaryColor = "#F9C202";

    return (
      
      <AppBar position="static" className="Hotbar" sx={{ backgroundColor: mainColor }}>
        <Toolbar className='Toolbar'>
        <Link to="/"><Button color="inherit">  <img src={logo} className="App-logo" alt="logo" /> </Button></Link>
          <Typography className="hotbar" variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center', fontFamily: font1, fontSize: '60px', textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)" }}> Social-Cuisine </Typography>
          {!logged ? (
            <Button onClick={this.handleConnectionButton} color="inherit" sx={{ fontFamily: 'Grand Hotel', fontSize: '40px', textTransform: "none", textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)", boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.3)' }}> Se Connecter </Button> 
          ) : (
            <div>
           <Button onClick={this.handleUserButton}><svg color="#FFF" xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-person-square" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"/>
          </svg></Button>

          <Menu
                open={Boolean(anchorElUser)}
                onClose={this.handleCloseUserMenu}
                anchorEl={anchorElUser}
              >
                <MenuItem onClick={this.handleCloseUserMenu}>Profil</MenuItem>
                <Link to="/userCreate"><MenuItem onClick={this.handleCloseUserMenu}>Mon Comptes</MenuItem></Link>
                <MenuItem onClick={this.logOut}>Logout</MenuItem>
              </Menu>
          </div>
          )}
          <Dialog sx={{height : "100%"}} open={connectionPopUp} onClose={this.closeConnectionPopUp}>
            <DialogContent sx={{ backgroundColor: bgColor }}>
              <form>
                <label>
                  Nom d'utilisateur:
                  <input type="text" name="username" value={formData.username} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                  Mot de passe:
                  <input type="password" name="password" value={formData.password} onChange={this.handleChange} />
                </label>
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleConnection} color="inherit" sx={{ fontFamily: 'Grand Hotel', fontSize: '40px', textTransform: "none", textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)", boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.3)' }}> Se Connecter </Button>
              <Link to="/userCreate" style={{ textDecoration: 'none' }}>
                <Button onClick={this.closeConnectionPopUp} color="inherit" sx={{ fontFamily: 'Grand Hotel', fontSize: '40px', textTransform: "none", textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)", boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.3)', color : 'inherit' }}> créer un compte </Button>
              </Link>
            </DialogActions>
          </Dialog>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopBar;