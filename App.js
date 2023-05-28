import React from 'react';
import logo from'./image/Logo.png';
import './App.css';
import { AppBar, Autocomplete } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import { Dialog } from '@mui/material';
import { DialogTitle } from '@mui/material';
import { DialogContent } from '@mui/material';
import { DialogActions } from '@mui/material';



const bgColor = "#CBF6BD"
const font1 = "Grand Hotel"
const font2 = "Eczar"
const mainColor = "#10654E"
const secondaryColor = "#9BC472"
const tertiaryColor = "#F9C202"

function App() {
  const [popupVisible, setPopupVisible] = React.useState(false);

  const handleButtonClick = () => {
    setPopupVisible(true);
  };
  const closePopup = () => {
    setPopupVisible(false);
  };


  return (
      <div className="App">
      <AppBar position="static" className="Hotbar" sx={{backgroundColor: mainColor}}>
          <Toolbar className='Toolbar'>
          <Button color="inherit"> <img src={logo} className="App-logo" alt="logo" /> </Button>
            <Typography className="hotbar" variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center',fontFamily: font1, fontSize: '60px', textShadow:"4px 4px 8px rgba(0, 0, 0, 0.5)" }}> Social-Cuisine </Typography>
            <Button onClick={handleButtonClick} color="inherit" sx={{fontFamily: 'Grand Hotel', fontSize: '40px', textTransform: "none", textShadow:"4px 4px 8px rgba(0, 0, 0, 0.5)",boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.3)'}}> Se Connecter </Button>
            <Dialog open={popupVisible} onClose={closePopup}>
        <DialogContent  sx={{backgroundColor:bgColor}}>
          <p>Contenu de la pop-up</p>
        </DialogContent>
        <DialogActions>
        <Button onClick={closePopup} color="inherit" sx={{fontFamily: 'Grand Hotel', fontSize: '40px', textTransform: "none", textShadow:"4px 4px 8px rgba(0, 0, 0, 0.5)",boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.3)'}}> Se Connecter </Button>
        <Button onClick={closePopup} color="inherit" sx={{fontFamily: 'Grand Hotel', fontSize: '40px', textTransform: "none", textShadow:"4px 4px 8px rgba(0, 0, 0, 0.5)",boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.3)'}}> Se Connecter </Button>

        </DialogActions>
      </Dialog>
          </Toolbar>
           </AppBar>
      <div className='Recherche'>
      <TextField id='schearch' label='Rechercher une recette' variant='outlined' sx={{width: '50%', backgroundColor: "white", borderRadius: '10px', boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.3)'}}/>
      </div>
      <div className='TopRecette'> 
      <Typography className="TopRecette" variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left',fontFamily:font2, fontSize: '30px', paddingTop:"1.75%", paddingLeft:"0.75%", textDecoration:"underline", color:mainColor}}> Top des recettes de la semaine : </Typography>
      </div> 
      </div>
  );
}

export default App;
