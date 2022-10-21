import React from "react";
import { ReactDOM } from "react";
import Navbar from '../../components/Navbar.js';
import  'bootstrap/dist/css/bootstrap.min.css';
import hello from './about.jpg';
import a1 from './a1.svg'
import a2 from './a2.svg'
import a3 from './a3.svg'
import a4 from './a4.svg'
import "./About.css";
function About() {
    return (
        <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${hello})` }}
      ></div>
      <div className="centered">
        <h1>We Share <br/> Knowledge <br/> With the World</h1>
      </div>
      <br></br>
      <div className="ab2">
        <table className="tb">
          <tr>
            <th colSpan={3}><h2>Why Choose Us ? </h2></th>
          </tr>
          <tr>
            <td><img src={a1}/></td>
            <td><img src={a2}/></td>
            {/* <td><img src={a3}/></td> */}
            <td><img src={a4}/></td>
          </tr>
          <tr>
            <td><p>Two teachers <br/> instead of one</p></td>
            <td><p>One teacher - teaches <br/> concepts clearly</p></td>
            {/* <td><p>Another teacher - pays personal <br/> attention to students<br/> and solves their doubts</p></td> */}
            <td><p>360 degree teaching</p></td>
          </tr>
        </table>

    </div>
    </div>
    );
}

export default About;