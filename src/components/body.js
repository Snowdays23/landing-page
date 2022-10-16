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

            <div className = "wrapper-outside-body  ">

                <div className = "white-div3"></div>

                <div className='row justify-content-center wrapper-text' >

                    <div className='col-10'>

                        <p className=''>We are more than thrilled to announce the comeback of the biggest winter sports event in all of Europe</p>

                    </div>

                </div>

                <br/>
                    
                
                <div className='container mt-3'>

                    <div className='row justify-content-center'>

                        <div className='col-12'> 

                            <iframe className = "yt-video"  src="https://www.youtube.com/embed/68TUBKxxVug?autoplay=1&mute=1"
                            title="YouTube video player" frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen></iframe>

                        </div>

                    </div>

                </div>

                <img src={blueStars} id = "blue-stars-reversed"/>

                <img src={bgMountains} id="mountains-illustration2" />


            </div>
            
            
        )
    }
}