import React, { Component } from 'react';
import bgMountains from '../assets/img/mountains_illustration2.svg';
import "../assets/css/bootstrap.min.css";
import "../assets/css/bootstrap-override.css";
import "../assets/css/style.css";

export default class Body3 extends Component {
    render () {
        return (

            <div className = " wrapper-outside-body ">
                <img src={bgMountains} id="mountains-illustration2" />

                <div className='offset-up2'>

                    <div className='row justify-content-center wrapper-title-sport' >

                        <div className='col-10'>

                            <h2 className='h2'>PARTICIPANTS</h2>
                            <h5 className=''>from the last edition</h5>

                        </div>

                    </div>      

                </div>
                
            </div>
            
        )
    }
}