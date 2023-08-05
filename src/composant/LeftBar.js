import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import logo from '../image/Logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './style/leftBar.css';
class LeftBar extends Component {

    render(){
        return(
            <div className = "bar">
                <Link to="/createRecipe"><Button class = "add">+</Button></Link>
                </div>

        );
    }
}
export default LeftBar;