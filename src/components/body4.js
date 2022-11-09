import React, { Component } from 'react';
import bgMountains2 from '../assets/img/mountains_illustration2_white.svg';
import LogosTable from './subcomponents/logos-table';
import clipper from '../assets/img/sponsorsLogo/clipper.png';
import decathlon from '../assets/img/sponsorsLogo/decathlon.png';
import loacker from '../assets/img/sponsorsLogo/loacker.png';
import bgEndMountains from '../assets/img/mountains_illustration2_white.svg';
import skiGuy from '../assets/img/previousImg/08-14.28_JAC_1800.jpg';
import "../assets/css/bootstrap.min.css";
import "../assets/css/bootstrap-override.css";
import "../assets/css/style.css";
import "../assets/css/styleBody4.css";

export default class Body4 extends Component {


    render () {
        return (

            <div  className='wrapper-outside-body overlay-1 relative offset-up-15 '>
                
                <img src={bgMountains2} className="relative offset-up-15" />    

                <div className='wrapper-outside-body absolute overlay-1 offset-down-10 mb-5'>

                    <div className='row justify-content-center' >

                        <div className='col-10'>

                            <h2 className='title font-josefin '>SPONSORS & PARTNERS</h2>
                            <h5 className='font-poppins normal-text'>we had the great opportunity to work with brand like</h5>

                            <div className='mt-3'>
                                    <LogosTable logos = {[clipper, decathlon, loacker]}></LogosTable>
                            </div>

                        </div>

                    </div>

                </div>


                <div className='row justify-content-center mt-5'>
                        <div className='col-12'>
                            <div className='slide'>
                                <img name="carouselImage" src={skiGuy} alt=""/>
                            </div>
                        </div>
                    </div>


            </div>
            
        )
    }
}