import React, { Component } from 'react';
import bgMountains from '../assets/img/mountains_illustration2.svg';
import "../assets/css/bootstrap.min.css";
import "../assets/css/bootstrap-override.css";
import "../assets/css/style.css";

export default class Body3 extends Component {
    render () {
        return (

            <div className = " wrapper-outside-body ">
                <img src={bgMountains} id="mountains-illustration2" />
                
            </div>
            
        )
    }
}