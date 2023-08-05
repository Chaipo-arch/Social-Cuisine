import TopBar from '../composant/topBar'; // Import the TopBar component
import React, { useEffect } from 'react';
import Home from '../composant/homeComponent';
import LeftBar from '../composant/LeftBar';
import { useLogged } from '../context/LoggedContext';
import { AppBar, Toolbar, Typography, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import '../composant/style/Home.css';

const createRecipe = () => {
    const { logged } = useLogged();

    return (
        <div className="App">
        <div className='Recherche'>
            <TextField id='schearch' label='Rechercher une recette' variant='outlined' sx={{ width: '50%', backgroundColor: "white", borderRadius: '10px', boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.3)' }} />
        </div>
        </div>
    );
};

export default createRecipe;