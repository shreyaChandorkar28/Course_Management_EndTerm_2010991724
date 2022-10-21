import React from "react";
import { ReactDOM } from "react";
import Navbar from '../components/Navbar';
// import Video from '../components/Video'
import FAQ from '../components/FAQ'
import hello from '../pl.jpg';
import "./Home.css";
import Slider from '../components/Slider'
import Card from '../components/Cards/Card'
function Home() {
    return (
        <div className="hmain">
            <div className="smain">
            <Slider/>
            </div>
            <br/>
            <br/>
            <div className="cmain">
            <Card/>
            </div>
            <br/>
            <div className="fa">
            <FAQ/>
            </div>
            
        </div>
    );
}

export default Home;