import React from 'react';
import logo from "./Globo_logo.png";
import "./Header.css";
const  Header=() =>(
   
<header className="row">
        <div className="col-md-5">
            <img src={logo} alt="logo" className="logo"/>
        </div>
        <div className="col-md-7 mt-5 subtitle">
        Providing houses world wide
        </div>
    </header>
); 

export default Header
