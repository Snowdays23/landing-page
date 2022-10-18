import React, { Component } from 'react';
import bgMountains from '../assets/img/mountains_illustration2.svg';
import "../assets/css/bootstrap.min.css";
import "../assets/css/bootstrap-override.css";
import "../assets/css/style.css";

export default class Body5 extends Component {


    render () {
        return (

            <div>
                <img src={bgMountains} id="mountains-illustration3" />

                <div className='wrapper-outside-body4 offset-down4'>
                
                <div className='row justify-content-center ' >

                    <div className='col-10'>

                        <h2 className='text-white'>CONTACT INFORMATION</h2>

                    </div>

                </div> 

                </div>
            </div>
            
        )
    }
}