import React, { Component } from 'react';
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/bootstrap-override.css";
import "../../assets/css/style.css";

function Logo ({img}) {

        return (

            <span id="wrapper-logos" className = "p-2 col-3">

                <img src={img} id = "img-logo" />

            </span>
            
        )
    
}

export default Logo;
