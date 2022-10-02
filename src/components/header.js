import React, { Component } from 'react';
import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";

export default class Header extends Component {
    render () {
        return (
            
            <div className='container'>

                <div className='row justify-content-center mt-5 pb-5'>

                    <div className='col-8'>

                        <img src="img/logo-sd-23.png" className = "main-logo"/>

                    </div>
                    
                </div>

                <div className='row justify-content-center mt-5'>

                    <div className='col-6'>

                        <h1 className='h5 font-weight-bold'>SAVE THE DATE</h1>
                        <h1 className='h5 font-weight-bold'>FEBRUARY 2023</h1>
                        
                    </div>
                    
                </div>

            </div>
        )
    }
}