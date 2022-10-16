import React, { Component } from 'react';
import skiGuy from '../assets/img/08-14.28_JAC_1800.jpg';
import pool from '../assets/img/07-20.34__MG_5258.jpg';
import ballField from '../assets/img/07-19.37_ROB_0924.jpg';
import volleyball from '../assets/img/09-14.49_ISE_045.jpg';
import gameSnow from '../assets/img/09-14.02_JAC_2245.jpg';
import party from '../assets/img/08-00.13_ROB_1337.jpg';
import "../assets/css/bootstrap.min.css";
import "../assets/css/bootstrap-override.css";
import "../assets/css/style.css";

export default class Body2 extends Component {
    render () {
        return (

            <div className = " wrapper-outside-body2 ">

                <div className='blue-bg  '></div>

                <div className = "offset-up">

                    <div className='row justify-content-center wrapper-title-sport' >

                        <div className='col-10'>

                            <h2 className='text-white'>SPORTS & OPPORTUNITIES</h2>

                        </div>

                    </div>              

                    <div className='row justify-content-center offset-down '>
                        <div className='col-10'>
                            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img class="d-block w-100" src={skiGuy} alt="First slide"/>
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src={ballField} alt="Second slide"/>
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src={gameSnow} alt="Third slide"/>
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>

                    </div>

                    <div className='row justify-content-center offset-down2'>
                        <div className='col-10'>
                            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img class="d-block w-100" src={pool} alt="First slide"/>
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src={volleyball} alt="Second slide"/>
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src={party} alt="Third slide"/>
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            
        )
    }
}