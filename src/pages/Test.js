import TopBar from '../composant/topBar'; // Import the TopBar component
import React, { useEffect } from 'react';
import Home from '../composant/homeComponent';
import LeftBar from '../composant/LeftBar';
import { useLogged } from '../context/LoggedContext';
import CreateRecipe from '../composant/createRecipe'

const test = () => {
    // const { logged } = useLogged();
    const logged = true;
    return (
        
        <div style={{ display: 'flex'  }}> 
                  {logged && <LeftBar />}
            <div style={{ flex: '1'}}>
                <CreateRecipe />
            </div>
        
        </div>
    );
};

export default test;