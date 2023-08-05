import TopBar from '../composant/topBar'; // Import the TopBar component
import React, { useEffect } from 'react';
import Home from '../composant/homeComponent';
import LeftBar from '../composant/LeftBar';
import { useLogged } from '../context/LoggedContext';

const homePage = () => {
    const { logged } = useLogged();

    return (
        
        <div style={{ display: 'flex' }}> 
                  {logged && <LeftBar />}
            <div style={{ flex: '1'}}>
                <Home />
            </div>
        
        </div>
    );
};

export default homePage;