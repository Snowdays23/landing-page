import React, { Component } from 'react';
import FlippingImageCard from './subcomponents/flipping-image-card';
import skiGuy from '../assets/img/previousImg/08-14.28_JAC_1800.jpg';
import pool from '../assets/img/previousImg/07-20.34__MG_5258.jpg';
import whiteStars from '../assets/img/white_stars.svg';
import Separator from './subcomponents/separator';
import "../assets/css/bootstrap.min.css";
import "../assets/css/bootstrap-override.css";
import "../assets/css/styleBody2.css";
import "../assets/css/style.css";

export default class Body2 extends Component {
    render () {
        return (

            // da rivedere lo spacing qua sopra nelle varie size dello screeen

            <div className = "wrapper-outside-body relative offset-up-20 pb-15">

                <div className='d-xs-block d-lg-none'>
                        <Separator number={20} ></Separator>
                </div>

                <div className = "container relative offset-up-5">

                    <div className='row justify-content-center relative offset-up-5' >

                        <div className='col-10'>

                            <h2 className='text-blue font-josefin title'>SPORTS AND OPPORTUNITIES</h2>

                        </div>

                    </div>              
                    
                    <div className='row justify-content-center'>
                        <div className=' col-lg-5 col-10'>
                            <div class="flipping-image-card-wrapper ">
                                <FlippingImageCard
                                    imgFront={skiGuy} 
                                    imgBack={pool} 
                                    textFront="Didascalia fronte carta prova" 
                                    textBack="Didascalia retro carta prova"/>
                            </div>
                        </div>
                    
                        <div class="w-100 d-xs-block d-lg-none "></div>

                        <div className='d-xs-block d-lg-none col-12'>
                             <Separator number={10} ></Separator>
                        </div>

                        <div class="w-100 d-xs-block d-lg-none "></div>

                        <div className=' col-lg-5 col-10'>

                            <div class="flipping-image-card-wrapper">
                                <FlippingImageCard
                                    imgFront={skiGuy} 
                                    imgBack={pool} 
                                    textFront="Didascalia fronte carta prova" 
                                    textBack="Didascalia retro carta prova"/>
                            </div>
                        </div>                    

                        <div className='row justify-content-center'>
                            <div className='d-none d-sm-block d-md-none'>
                                <div className='relative white-separator-sm'></div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            
        )
    }
}