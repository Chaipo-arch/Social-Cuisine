import React, { Component } from 'react';
import axios from 'axios';
import Rating from '@mui/material/Rating';
import logo from '../image/Logo.png';
import lasagne from '../image/lasagne.jpg';
import './style/Home.css';
import { Link } from 'react-router-dom';
import LeftBar from '../composant/LeftBar';
import topBar from '../composant/topBar'; // Importez le composant
import { AppBar, Toolbar, Typography, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const bgColor = "#CBF6BD";
const font1 = "Grand Hotel";
const font2 = "Eczar";
const mainColor = "#10654E";
const secondaryColor = "#9BC472";
const tertiaryColor = "#F9C202";

class Home extends Component {

    render(){
        return(
            <div>
                <div className='Recherche'>
                    <TextField id='schearch' label='Rechercher une recette' variant='outlined' sx={{ width: '50%', backgroundColor: "white", borderRadius: '10px', boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.3)' }} />
                </div>
                <div className='TopRecette'>
                    <Typography className="TopRecette" variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left', fontFamily: font2, fontSize: '30px', paddingTop: "1.75%", paddingLeft: "0.75%", textDecoration: "underline", color: mainColor }}> Top des recettes de la semaine : </Typography>
                </div>
                <div className="ClassemenTopRecettes" >
                    <div className='TableauTopRecette'>
                        <Link to="/Recipe"> <img src={lasagne} className="photo"></img> 
                        <div className='titreRecette'> Lasagne 
                            <Rating name="read-only" value={5} readOnly/>
                        </div>
                        </Link>
                    </div>
      
                    <div className='TableauTopRecette'>
                    <img src={lasagne} className="photo"></img>
                    <div className='titreRecette'> Lasagne 
                        <Rating name="read-only" value={5} readOnly/>
                    </div>
                </div>
                <div className='TableauTopRecette'>
                    <img src={lasagne} className="photo"></img>
                    <div className='titreRecette'> Lasagne 
                        <Rating name="read-only" value={5} readOnly/>
                    </div>
                </div>
                <div className='TableauTopRecette'>
                    <img src={lasagne} className="photo"></img>
                    <div className='titreRecette'> Lasagne 
                        <Rating name="read-only" value={5} readOnly/>
                    </div>
                </div>
            </div>
        </div>

        );
    }
}
export default Home;
