import React, { Component } from 'react';
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/bootstrap-override.css";
import "../../assets/css/style.css";

function Logo ({img}) {

        return (

            <span className = "p-3 col-3 university-wrapper-logo">

                <img src={img} className = " university-logo" />

            </span>
            
        )
    
}

export default Logo;
