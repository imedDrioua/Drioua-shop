import React from 'react';

import './hompage.components.scss';
import "../../components/directory/directory";
import Directory from '../../components/directory/directory';
const HomePage = ()=>{
    return (
        <div className="homepage">
        <div  className="bg-video" >
            <video id="video" className="video" playsInline autoPlay muted loop>
              <source src="./homeVideo.mp4"/>
              Sorry your browser d'ont support video play
            </video>
        </div>
        <h1 className="bigTitle">Dr Imed's Shop</h1>
             <Directory />

             
        </div>
    );
}
export default HomePage;
