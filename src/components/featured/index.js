import React from 'react';
import Carrousel from './Carrousel'
import Countdown from './Countdown'

const Featured = () => {
    return (
        <div style={{position: 'relative'}}>
        <Carrousel />
            
            <div className="artist_name">
            <a href="http://example.com" style={{textDecoration: 'none'}}>
                <div className="wrapper" onClick={()=> {console.log("you clicked")}}>
                Register Here
                </div>
                </a>
            </div>
        <Countdown />
        </div>
    );
};

export default Featured;