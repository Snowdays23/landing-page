import React, { Component } from 'react';
import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";

export default class Header extends Component {
    render () {
        return (

            <div className = "wrapper-outside">

                <div className = "level-bg">
                    
                    <div className='row justify-content-center mt-5 pb-5'>

                        <div className='col-12'>

                             <img src="img/mountains_illustration.svg" className = "bg-mountains"/>
            
                        </div>

                    </div>

                </div>

                <div className='container level-main'>

                    <div className='row justify-content-center mt-5 pb-4'>

                        <div className=''>

                            <img src="img/Logo_SD_23.svg" className = "main-logo"/>

                        </div>
                        
                    </div>                

                    <div className='row justify-content-center mt-4'>

                        <div className='col-6 mt-3'>

                            <h1 className='font-weight-bold subtitle'>SAVE THE DATE FEBRUARY 2023</h1>
            
                        </div>
                        
                    </div>

                    <img src="img/white_stars.svg" className = "white-stars"/>

                    <br/>
                    
                    <img src="img/blue_stars.svg" className = "blue-stars"/>

                </div>

            </div>
            
            
        )
    }
}