import React, { Component } from 'react';
import bgMountains from '../assets/img/mountains_illustration2.svg';
import LogosTable from './subcomponents/logos-table';
import clipper from '../assets/img/sponsorsLogo/clipper.png';
import decathlon from '../assets/img/sponsorsLogo/decathlon.png';
import loacker from '../assets/img/sponsorsLogo/loacker.png';
import bgEndMountains from '../assets/img/mountains_illustration2_white.svg';   
import "../assets/css/bootstrap.min.css";
import "../assets/css/bootstrap-override.css";
import "../assets/css/styleBody6.css";
import "../assets/css/style.css";

export default class Body6 extends Component {


    render () {
        return (

            <div  id="wrapper-outside-body-end" className='wrapper-outside-body relative pt-5'>

                <img src={bgEndMountains} id="bg-mountains-pics" className="absolute offset-up-20 offset-right-0" />  

                <div className='relative'>

                    <div className = "container ">

                        <div className='row justify-content-center' >

                            <div className='col-10'>

                                <h2 className='text-blue font-josefin title'>"THERE ARE NO DAYS LIKE SNOWDAYS"</h2>

                            </div>

                        </div>     

                    </div>  

                    {/* <img src={bgEndMountains} className='relative offset-down-5'/>  */}

                    <img src={bgMountains} id="bg-mountains-end" className='absolute offset-down-30 offset-right-0'/> 
                
                    <div className = "container relative offset-down-20">

                        <div className='row justify-content-center' >

                            <div className='col-10'>

                                <h2 className='text-white font-josefin subtitle'>CONTACT INFORMATION</h2>
                                <h5 className='font-poppins normal-text text-white'>info@snowdays.it</h5>

                            </div>

                        </div>    

                        <div className='mt-5'>
                                    <LogosTable logos = {[clipper, decathlon, loacker]}></LogosTable>
                        </div>



                    </div> 

                </div>

            </div>
            
        )
    }
}