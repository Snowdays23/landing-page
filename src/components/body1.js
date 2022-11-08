import React, { Component } from 'react';
import blueStars from '../assets/img/blue_stars.svg';
import bgMountains from '../assets/img/mountains_illustration2.svg';
import "../assets/css/bootstrap.min.css";
import "../assets/css/bootstrap-override.css";
import "../assets/css/styleBody1.css";
import "../assets/css/style.css";

export default class Body1 extends Component {
    render () {
        return (

            <div className = "wrapper-outside-body relative offset-up-10">
 
                <div className='row justify-content-center mt-5' >

                    <div className='col-10'>

                        <p className='font-josefin normal-text'>We are more than thrilled to announce the comeback of the biggest winter sports event in all of Europe</p>

                    </div>

                </div>

                <img src={blueStars} id = "blue-stars2" className='absolute overlay-1 offset-down-5 offset-right-0'/>
                
                <div className='mt-5 overlay-1 relative'>

                    <div className='row justify-content-center'>

                        <div className='col-12'> 

                            <iframe id= "yt-video"
                            src="https://www.youtube.com/embed/68TUBKxxVug?autoplay=1&mute=1"
                            title="YouTube video player" frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen></iframe>

                        </div>

                    </div>

                </div>

                <div className='row justify-content-center relative overlay-1 mt-5' >

                        <div className='col-10'>

                            {/* <h2 className='title font-josefin text-white '>MORE IMPRESSIONS</h2> */}
                            <h5 className='font-poppins normal-text text-white ' >
                                Year after year, the event grew steadily and now, after more than 10 years, participants are more than 750 and they comed from the best universities in Europe.
                            </h5>

                        </div>

                </div>


                <div className='absolute offset-down-40' id="blue-separator"></div>
                <img src={bgMountains} className = "relative offset-up-px-150" id="mountains-separator1" />



            </div>
            
            
        )
    }
}