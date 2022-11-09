import React, { Component } from 'react';
import bgMountains from '../assets/img/mountains_illustration1.svg';
import logoSD23 from '../assets/img/Logo_SD_23.svg';
import whiteStars from '../assets/img/white_stars.svg';
import blueStars from '../assets/img/blue_stars.svg';
import Separator from './subcomponents/separator';
import "../assets/css/style.css";
import "../assets/css/styleHeader.css";
import "../assets/css/bootstrap.min.css";    
import "../assets/js/PureSnow.js";

export default class Header extends Component {
    render () {
        return (

            <div className = "wrapper-outside  ">

                <div className = "level-bg ">
                    
                    <div className='row justify-content-center'>

                        <div className='col-12'>

                             <img src={bgMountains} id = "bg-mountains"/>
            
                        </div>

                    </div>

                </div>

                <div className='level-main offset-down-5 offset-right-0 offset-left-0 full-width '>

                    <div>

                        <div className='row justify-content-center'>

                            <img src={logoSD23} id = "main-logo" className='white-shadow-stronger'/>
                            
                        </div>                


                        <Separator number={10} ></Separator>
                        <div className='d-none d-sm-block'>
                             <Separator number={10} ></Separator>
                        </div>
                        
                        <div className='row justify-content-center  relative offset-down5'>

                            <div className='col-8 mt-5'>

                                <h1 className='subtitle font-weight-bold text-white font-josefin blue-shadow'>SAVE THE DATE FEBRUARY 2023</h1>
                
                            </div>
                            
                        </div>

                        <div className = "row justify-content-center relative offset-up-10 offset-right-30">
                            <img src={whiteStars} id="white-stars1" className = "blue-shadow overlay-1"/>
                        </div>

                        

                        <br/>
                        
                        <div className = "row justify-content-center relative offset-down-5 offset-left-30">
                            <img src={blueStars} id="blue-stars1" className = "white-shadow overlay-1"/>
                        </div>

                    </div>

                </div>


            </div>
            
            
        )
    }
}