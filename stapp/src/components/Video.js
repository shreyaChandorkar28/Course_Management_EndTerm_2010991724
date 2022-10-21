import React from "react";
import './Video.css'
import {Link} from 'react-router-dom';
import vi from '../hv.mp4'
function Video(){
    return(
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={vi} type='video/mp4' />
            </video>
            <div className='content' id='wrapper'>
                <div className="typing-demo">
                <h1>Adventure</h1>
                </div>
            </div>
        </div>
    );
}
export default Video;