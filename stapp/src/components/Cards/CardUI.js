import React from "react";
import { ReactDOM } from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';

const CardUI = props =>{
    return(
        <div className="card text-center">
            <div className="overflow">
                <img src={props.imgsrc} alt="Image 1" className="card-img-top"></img>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">Course</h4>
                <p className="card-text text-secondary">
                    lorem ipsum
                </p>
                <a href="#" className="btn btn-outline-success" id="btn">Go Anywhere</a>
            </div>
        </div>
    );
}

export default CardUI;