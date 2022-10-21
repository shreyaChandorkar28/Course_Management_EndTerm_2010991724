import React from "react";
import { ReactDOM } from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import CardUI from './CardUI';
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img6 from './img6.jpg'
function Card(){
    return(
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-md-4">
                    <CardUI imgsrc={img1}/>
                </div>
                <div className="col-md-4">
                    <CardUI imgsrc={img2}/>
                </div>
                <div className="col-md-4">
                    <CardUI imgsrc={img3}/>
                </div>
                <div className="col-md-4">
                    <CardUI imgsrc={img4}/>
                </div>
                <div className="col-md-4">
                    <CardUI imgsrc={img5}/>
                </div>
                <div className="col-md-4">
                    <CardUI imgsrc={img6}/>
                </div>
            </div>
        </div>
    );
}

export default Card;