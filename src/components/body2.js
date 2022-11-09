import React, { Component } from 'react';
import skiGuy from '../assets/img/previousImg/08-14.28_JAC_1800.jpg';
import pool from '../assets/img/previousImg/07-20.34__MG_5258.jpg';
import whiteStars from '../assets/img/white_stars.svg';
import "../assets/css/bootstrap.min.css";
import "../assets/css/bootstrap-override.css";
import "../assets/css/styleBody2.css";
import "../assets/css/style.css";

export default class Body2 extends Component {
    render () {
        return (

            <div className = "wrapper-outside-body relative offset-up-15 pb-15">

                <div className = "container">

                    <div className='row justify-content-center relative offset-up-5' >

                        <div className='col-10'>

                            <h2 className='text-blue font-josefin title'>SPORTS AND OPPORTUNITIES</h2>

                        </div>

                    </div>              

                    
                    <div className='row justify-content-center'>
                        <div className='col-10'>
                            <div className='slide'>
                                <img name="carouselImage" src={skiGuy} alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className='row justify-content-center mt-5 '>
                        <div className='col-10'>
                            <div className='slide'>
                                <img name="carouselImage2" src={pool} class="slide" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className='row justify-content-center'>
                        <div className='d-none d-sm-block'>
                            <div className='relative white-separator-sm'></div>
                        </div>
                    </div>

                </div>

            </div>
            
        )
    }
}