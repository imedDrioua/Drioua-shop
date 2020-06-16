import React from 'react';

import './hompage.components.scss';
import "../../components/directory/directory";
import Directory from '../../components/directory/directory';
const HomePage = ()=>{
    return (
        <div className="homepage">
        <h1 className="bigTitle">Asmas's Shop</h1>
        <img className="shopImage" src="./home.png" alt="shop"/>
             <Directory />
        </div>
    );
}
export default HomePage;
