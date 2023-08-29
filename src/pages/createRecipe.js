import TopBar from '../composant/topBar'; // Import the TopBar component
import React, { useEffect } from 'react';
import Home from '../composant/homeComponent';
import LeftBar from '../composant/LeftBar';
import { useLogged } from '../context/LoggedContext';
import CreateRecipeComponent from '../composant/createRecipeComponent'

const CreateRecipe = () => {
    //const { logged } = useLogged();
    const logged = true;

    return (
        
        <div style={{ display: 'flex'  }}> 
                  {logged && <LeftBar />}
            <div style={{ flex: '1'}}>
                <CreateRecipeComponent />
            </div>   
        </div>
    );
};

export default CreateRecipe;