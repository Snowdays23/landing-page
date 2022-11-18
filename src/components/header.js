import React, { Component } from 'react';
import bgMountains from '../assets/img/mountains_illustration1.svg';
import bgMountainsWEB from '../assets/img/mountains_illustration1WEB.svg';
import logoSD23 from '../assets/img/Logo_SD_23.svg';
import whiteStars from '../assets/img/white_stars.svg';
import blueStars from '../assets/img/blue_stars.svg';
import Separator from './subcomponents/separator';
import "../assets/css/style.css";
import "../assets/css/styleHeader.css";
import "../assets/css/bootstrap.min.css";  

export default class Header extends Component {
    render () {
        return (

            <div className = "wrapper-outside  ">

                {/* <div className='d-none d-lg-block'>
                    <Separator number={30} ></Separator>
                </div> */}

                <div className = "level-bg ">
                    
                    <div className='row justify-content-center relative overlay-1'>

                        <div className='col-12'>

                        <div className='d-xs-block d-lg-none'>
                            <img src={bgMountains} id = "bg-mountains"  alt="Stylized mountains"/>
                        </div>
                            

                        <div className='d-none d-lg-block relative offset-up-5'>
                            <img src={bgMountainsWEB} id = "bg-mountains" alt="Stylized mountains"/>
                        </div>
            
                        </div>

                    </div>

                </div>


                <div className='level-main offset-down-1 offset-right-0 offset-left-0 full-width '>

                    <div>

                        <div className='d-xs-block'>

                            <div className='d-xs-block d-lg-none'>
                                <Separator number={10} ></Separator>
                            </div>
                            
                            <div className='row justify-content-center'>

                                <img src={logoSD23} id = "main-logo" className='white-shadow-stronger'  alt="Snowdays23 logo: blue snowflake with writing: SNOWDAYS"/>
                                
                            </div>                


                            <Separator number={10} ></Separator>
                            <div className='d-none d-sm-block d-lg-none'>
                                <Separator number={10} ></Separator>
                            </div>
                            
                            <div className='row justify-content-center relative offset-down5'>

                                <div className='d-xs-block d-lg-none'>
                                    <Separator number={10} ></Separator>
                                </div>

                                <div className='col-lg-4 col-8 m-2'>

                                    <div className='d-xs-block d-lg-none'>
                                        <h1 className='subtitle font-weight-bold text-white font-josefin blue-shadow'>SAVE THE DATE FEBRUARY 2023</h1>
                                    </div>
                                    
                                    <div className='d-none d-lg-block'>
                                        <h1 className='subtitle font-weight-bold text-blue font-josefin '>SAVE THE DATE FEBRUARY 2023</h1>
                                    </div>

                                </div>

                                
                                
                            </div>

                        </div>

                        <div className='d-none d-sm-block d-lg-none'>
                            
                            <div className = "row justify-content-center relative offset-up-10 offset-right-30">
                                <img src={whiteStars} id="white-stars1" className = "blue-shadow overlay-1" alt="Little white stars"/>
                            </div>

                        </div>

                        

                        <br/>
                        
                        <div className = "row justify-content-center relative offset-down-5 offset-left-30">
                            <img src={blueStars} id="blue-stars1" className = "white-shadow overlay-1"  alt="Little blue stars"/>
                        </div>

                        <br/>

                    </div>

                    

                </div>


            </div>
            
            
        )
    }
}