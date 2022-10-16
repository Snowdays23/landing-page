import React, { Component } from 'react';
import bgMountains from '../assets/img/mountains_illustration1.svg';
import logoSD23 from '../assets/img/Logo_SD_23.svg';
import whiteStars from '../assets/img/white_stars.svg';
import blueStars from '../assets/img/blue_stars.svg';

import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import "../assets/js/PureSnow.js";

export default class Header extends Component {
    render () {
        return (

            <div className = "wrapper-outside ">

                

                <div className = "white-div"></div>


                <div className = "level-bg ">
                    
                    <div className='row justify-content-center mt-5 pb-5'>

                        <div className='col-12'>

                             <img src={bgMountains} className = "bg-mountains"/>
            
                        </div>

                    </div>

                </div>

                <div className='container level-main'>

                    <div className='row justify-content-center mt-5 pb-4'>

                        <div className=''>

                            <img src={logoSD23} className = "main-logo"/>

                        </div>
                        
                    </div>                

                    <div className='row justify-content-center mt-4'>

                        <div className='col-6 mt-3'>

                            <h1 className='font-weight-bold subtitle'>SAVE THE DATE FEBRUARY 2023</h1>
            
                        </div>
                        
                    </div>

                    <img src={whiteStars} className = "white-stars"/>

                    <br/>
                    
                    <img src={blueStars} className = "blue-stars"/>

                </div>

                <div className = "white-div2"></div>

            </div>
            
            
        )
    }
}