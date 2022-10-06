import React, { Component } from 'react';
import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";

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
                    
                <img src="img/blue_stars.svg" id = "blue-stars-reversed"/>

            </div>
            
            
        )
    }
}