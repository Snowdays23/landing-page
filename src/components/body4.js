import React, { Component } from 'react';
import bgMountains2 from '../assets/img/mountains_illustration2_white.svg';
import LogosTable from './subcomponents/logos-table';
import clipper from '../assets/img/sponsorsLogo/clipper.png';
import decathlon from '../assets/img/sponsorsLogo/decathlon.png';
import loacker from '../assets/img/sponsorsLogo/loacker.png';
import subway from '../assets/img/sponsorsLogo/subway.png';
import "../assets/css/bootstrap.min.css";
import "../assets/css/bootstrap-override.css";
import "../assets/css/style.css";

export default class Body4 extends Component {


    render () {
        return (

            <div className='wrapper-outside-body3'>
                
                <img src={bgMountains2} id="mountains-illustration2_white" />   

                
                <img src={bgMountains2} id="mountains-illustration2_white2" />   

                <div className='wrapper-outside-body offset-up3 pt-5'>

                    <div className='row justify-content-center wrapper-title-sport pt-5 offset-up2' >

                        <div className='col-10'>

                            <h2 className='h2'>SPONSORS</h2>
                            <h5 className=''>from the last edition</h5>

                            <div className='mt-5 pt-2'>
                                    <LogosTable logos = {[clipper, decathlon, loacker, subway]}></LogosTable>
                            </div>

                        </div>

                    </div>

                </div>


            </div>
            
        )
    }
}