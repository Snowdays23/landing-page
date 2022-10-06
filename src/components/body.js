import React, { Component } from 'react';
import snowboardSport from '../assets/img/pic-girl-snowboard.jpg';
import blueStars from '../assets/img/blue_stars.svg';
import bgMountains from '../assets/img/mountains_illustration2.svg';
import "../assets/css/bootstrap.min.css";
import "../assets/css/bootstrap-override.css";
import "../assets/css/style.css";

export default class Body extends Component {
    render () {
        return (

            <div className = "wrapper-outside mt-5 pt-1">

                <div className='row justify-content-center mt-3'>

                    <div className='col-10 mt-1'>

                        <p className=''>We are more than thrilled to announce the comeback of the biggest winter sports event in all of Europe</p>

                    </div>

                </div>

                <br/>
                    
                
                <div className='container mt-2'>

                    <div className='row justify-content-center'>

                        <div className='col-3'> 
                        
                            <button type="button" className="btn btn-primary p-3" id="learn-more-btn"> learn more </button>
                        
                        </div>

                        <div className='col-7'> 

                            <img src={snowboardSport} id="girl-snowboard"/>

                        </div>

                    </div>

                </div>

                <img src={blueStars} id = "blue-stars-reversed"/>

                <img src={bgMountains} id="mountains-illustration2" />


            </div>
            
            
        )
    }
}