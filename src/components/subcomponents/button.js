import React, { Component, useNavigate } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/bootstrap-override.css";
import "../../assets/css/style.css";

function Button ({img, link}) {

    // const navigate = useNavigate();

    // const navigateToSocial = () => {

    //     navigate(link);

    // }

    return (

        <Router>

            <span id="wrapper-logos" className = "p-2 col-3">

                <a href={link} target="_blank">
                    <img src={img} id = "img-logo" />
                </a>

            </span>

        </Router>
        
    )
    
}

export default Button;
