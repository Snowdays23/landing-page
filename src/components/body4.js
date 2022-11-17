import React, { Component } from 'react';
import bgMountains2 from '../assets/img/mountains_illustration2_white.svg';
import clipper from '../assets/img/sponsorsLogo/clipper.png';
import decathlon from '../assets/img/sponsorsLogo/decathlon.png';
import loacker from '../assets/img/sponsorsLogo/loacker.png';
import Separator from './subcomponents/separator';
import "../assets/css/bootstrap.min.css";
import "../assets/css/bootstrap-override.css";
import "../assets/css/style.css";
import "../assets/css/styleBody4.css";
import img1Redbull from "../assets/img/previousImg/sponsors/redbull.jpg";
import img2Marlene from "../assets/img/previousImg/sponsors/marlene.jpg";
import img3Redbull from "../assets/img/previousImg/sponsors/redbull1.jpg";
import img4Flixbus from "../assets/img/previousImg/sponsors/flixbus.jpg";
import img5Alpenstoff from "../assets/img/previousImg/sponsors/alpenstoff.jpg";
import img6Clipper from "../assets/img/previousImg/sponsors/clipper.jpg";
import SponsorsRoll from './subcomponents/rolling-sponsors';
import ImagesCarousel from './subcomponents/images-carousel';

export default class Body4 extends Component {


    render () {
        return (

            <div className='wrapper-outside-body overlay-1 relative offset-up-20 '>
                
                <div className='wrapper-outside-body relative  overlay-1 offset-down-0 mb-5'>

                <div className='d-xs-block d-lg-none'>
                        <Separator number={20} ></Separator>
                </div>


                    <div className='row justify-content-center' >

                        <div className='col-lg-6 col-10'> 

                            <h2 className='title font-josefin '>SPONSORS & PARTNERS</h2>
                            <h5 className='font-poppins normal-text'>we had the great opportunity to work with brand like</h5>

                        </div>

                        <div className='col-lg-8 col-10 mt-3'>
                            <div className='my-4'>
                                <SponsorsRoll logos={[clipper, decathlon, loacker, loacker]}/>
                            </div>
                        </div>
                    </div>

                </div>

                <img src={bgMountains2} className="absolute full-width offset-right-0 offset-up-15"  alt="Stylized mountains"/>    


                <div className='row justify-content-center mt-5 relative '>
                    <div className='col-12'>
                        <div class="mt-5 p-0 w-100">
                            <ImagesCarousel images={[img1Redbull, img2Marlene, img3Redbull, img4Flixbus, img5Alpenstoff, img6Clipper]} intervalMs={4000}/>
                        </div>
                    </div>
                </div>


            </div>
            
        )
    }
}