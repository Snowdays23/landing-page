import React, { Component } from 'react';
import skiGuy from '../assets/img/previousImg/08-14.28_JAC_1800.jpg';
import pool from '../assets/img/previousImg/07-20.34__MG_5258.jpg';
import whiteStars from '../assets/img/white_stars.svg';
import "../assets/css/bootstrap.min.css";
import "../assets/css/bootstrap-override.css";
import "../assets/css/style.css";
import "../assets/js/Carousel.js";

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

                    
                    <div className='row justify-content-center offset-down'>
                        <div className='col-10'>
                            <div id="carouselExampleControls" class="carousel">
                                <div className='slide'>
                                    <img name="carouselImage" src={skiGuy} class="slide" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <img src={whiteStars} id = "white-stars2"/>

                    <div className='row justify-content-center offset-down2'>
                        <div className='col-10'>
                            <div id="carouselExampleControls" class="carousel">
                                <div className='slide'>
                                    <img name="carouselImage2" src={pool} class="slide" alt=""/>
                                </div>
                            </div>
                        </div>

                    </div>


                    <img src={whiteStars} id = "white-stars3"/>
                    
                    <div className='row justify-content-center wrapper-text offset-down3 mb-3' >

                        <div className='col-10'>

                            <p className='text-white'>There are many ways to have fun in Snowdays23! There will be Skiing, Snowboarding, Snow-Volleyball, Swimming & many ohter Snow-Games!</p>

                        </div>

                     </div>

                </div>

            </div>
            
        )
    }
}