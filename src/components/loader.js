import React from 'react';
import "./loader.scss"


const Loader= () => {

    
    

    return(
        <>
            <div className="loaderContainer">
            <div className="loader">
                <svg>
                <g>
                    <path d="M 50,100 A 1,1 0 0 1 50,0" />
                </g>
                <g>
                    <path d="M 50,75 A 1,1 0 0 0 50,-25" />
                </g>
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" className="stop1" />
                    <stop offset="100%" className="stop2" />
                    </linearGradient>
                </defs>
                </svg>
            </div>
            </div>
        </>
        
        
    );



};

export default Loader;
