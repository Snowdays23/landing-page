import React, { Component } from 'react';
import skiGuy from '../assets/img/previousImg/08-14.28_JAC_1800.jpg';
import pool from '../assets/img/previousImg/07-20.34__MG_5258.jpg';
import "../assets/css/bootstrap.min.css";
import "../assets/css/bootstrap-override.css";
// import "../assets/css/style.css";

export default class Body5 extends Component {


    render () {
        return (

            <div  className=' relative'>

                <div className='absolute overlay-1 full-width'>

                    <div className='row justify-content-center ' >

                        <div className='col-12'>
                            <div className='slide'>
                                <img name="carouselImage" src={skiGuy} alt=""/>
                            </div>
                        </div>

                    </div>

                    <div className='row justify-content-center mt-5' >

                        <div className='col-12'>
                            <div className='slide'>
                                <img name="carouselImage" src={pool} alt=""/>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            
        )
    }
}