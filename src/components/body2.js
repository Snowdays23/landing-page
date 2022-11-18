import React, { Component } from 'react';
import FlippingImageCard from './subcomponents/flipping-image-card';
import whiteStars from '../assets/img/white_stars.svg';
import Separator from './subcomponents/separator';
import img1SnowVolley from '../assets/img/previousImg/sports/snowvolley.jpg';
import img2Flag from '../assets/img/previousImg/sports/flag.jpg';
import img3Snowboarder from '../assets/img/previousImg/sports/snowboarder.jpg';
import img4Slope from '../assets/img/previousImg/sports/slope.jpg';
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

                <div className = "container relative offset-up-7">

                    <div className='row justify-content-center relative offset-up-5' >

                        <div className='col-10'>

                            <h2 className='text-blue font-josefin title'>SPORTS AND OPPORTUNITIES</h2>

                        </div>

                    </div>              
                    
                    <div className='row justify-content-center'>
                        <div className=' col-lg-5 col-10'>
                            <div class="flipping-image-card-wrapper ">
                                <FlippingImageCard
                                    imgFront={img1SnowVolley} 
                                    imgBack={img2Flag} 
                                    textFront="We welcome you to Snowdays, Europe's biggest winter sports event" 
                                    textBack="We offer diverse career opportunities, contacts with many companies and much more!"/>
                            </div>
                        </div>
                    
                        <div class="w-100 d-xs-block d-lg-none "></div>

                        <div className='d-xs-block d-lg-none col-12'>
                             <Separator number={30} ></Separator>
                        </div>

                        <div class="w-100 d-xs-block d-lg-none "></div>

                        <div className=' col-lg-5 col-10 mr-4'>

                            <div class="flipping-image-card-wrapper">
                                <FlippingImageCard
                                    imgFront={img4Slope} 
                                    imgBack={img3Snowboarder} 
                                    textFront="Get ready - 48km of slopes are calling!" 
                                    textBack="You want to try something new? At Snowdays you can choose between many different types of sport!"/>
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