import React, { Component } from 'react';
import pool from '../assets/img/previousImg/07-20.34__MG_5258.jpg';
import bgMountains from '../assets/img/mountains_illustration3.svg';
import LogosTable from './subcomponents/logos-table';
import instagram from '../assets/img/socialsLogo/instagram.svg';
import facebook from '../assets/img/socialsLogo/facebook.svg';
import youtube from '../assets/img/socialsLogo/youtube.svg';
import bgMountains2 from '../assets/img/mountains_illustration2.svg'; 
import "../assets/css/bootstrap.min.css";
import "../assets/css/bootstrap-override.css";
import "../assets/css/styleBody5.css";
import "../assets/css/style.css";
import ButtonsTable from './subcomponents/buttons-table';
import Separator from './subcomponents/separator';
import football from '../assets/img/previousImg/07-19.37_ROB_0924.jpg';
import volleyball from '../assets/img/previousImg/09-14.49_ISE_045.jpg';
import party from '../assets/img/previousImg/08-00.13_ROB_1337.jpg';
import "../assets/css/bootstrap.min.css";
import "../assets/css/bootstrap-override.css";
import "../assets/css/style.css";
import "../assets/css/styleBody4.css";
import ImagesCarousel from './subcomponents/images-carousel';
import skiGuy from '../assets/img/previousImg/08-14.28_JAC_1800.jpg';

export default class Body5 extends Component {
    
    render () {
        return (

            <div>

                <div  className='wrapper-outside-body relative offset-up-20'>

                    <div className='wrapper-outside-body relative overlay-1 full-width'>

                        <div className='d-none d-lg-block'>
                            <div className='relative offset-up-0 light-blue-separator-sm'></div>
                        </div>

                        <div className='d-xs-block d-lg-none'>
                            <div className='relative offset-up-0 light-blue-separator-md'></div>
                        </div>

                        <img src={bgMountains} className = "relative offset-up-1"  alt="Stylized mountains"/>

                        <div className=' absolute full-width offset-down-10 offset-right-0 center ' >

                            <div className='col-10 '>

                                <h2 className='title font-josefin text-white '>MORE IMPRESSIONS</h2>
                                <h5 className='font-poppins normal-text text-white' >from the past years</h5>

                            </div>

                        </div>

                        <div className='row justify-content-center relative offset-up-10' >
                            <div className='col-12'>
                                <div class="">
                                    <ImagesCarousel images={[party, skiGuy, pool, football, volleyball]} intervalMs={4000}/>
                                </div>
                            </div>

                        </div>

                        <div>

                            <div className='row justify-content-center relative' >

                                <div className='col-lg-6 col-10'>

                                    <h2 className='text-blue font-josefin title'>''THERE ARE NO DAYS LIKE SNOWDAYS''</h2>

                                </div>

                            </div>  

                        </div>
                    </div>  

                    <div className='relative overlay-1 '>

                        <img src={bgMountains2} id="bg-mountains-end" className='absolute offset-up-0 offset-right-0' alt="Stylized mountains"/> 
                            
                        <div className = "container relative offset-down-20">

                            <div className='row justify-content-center' >

                                <div className='col-lg-8 col-10'>

                                    <h2 className='text-white font-josefin subtitle'>CONTACT INFORMATION</h2>
                                    <h5 className='font-poppins normal-text text-white'>info@snowdays.it</h5>

                                </div>

                            </div>    

                            <div className='d-none d-sm-block'>
                                <Separator number={10} ></Separator>
                            </div>

                            <div className='d-none d-lg-block'>
                                <Separator number={12} ></Separator>
                            </div>

                            <div className=' row justify-content-center offset-down-10 mt-5 pt-5'> 

                                <ButtonsTable buttons = {[instagram, youtube, facebook]} links = {["https://www.instagram.com/snowdays.bolzano/","https://www.youtube.com/channel/UCthdDzE2fTo47z26YIDDf-g","https://www.facebook.com/Snowdays.Bolzano/"]}></ButtonsTable>
                            </div>

                        </div>



                    </div>                    

                </div>

                </div>

                

            
        )
    }
}