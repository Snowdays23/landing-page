import React, { Component } from 'react';
import FlippingImageCard from './subcomponents/flipping-image-card';
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


                    <div class="flipping-image-card-wrapper mx-2 my-4 p-2">
                        <FlippingImageCard
                            imgFront={skiGuy} 
                            imgBack={pool} 
                            textFront="Didascalia fronte carta prova" 
                            textBack="Didascalia retro carta prova"/>
                    </div>

                </div>

            </div>
            
        )
    }
}