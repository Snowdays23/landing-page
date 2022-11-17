import React, { Component } from 'react';
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
import img1Colors from '../assets/img/previousImg/general/colors.jpg';
import img2Skier from '../assets/img/previousImg/general/skier.jpg';
import img3Snowparty from '../assets/img/previousImg/general/snowparty.jpg';
import img4Buffet from '../assets/img/previousImg/general/buffet.jpg';
import img5Twister from '../assets/img/previousImg/general/twister.jpg';
import img6Pokal from '../assets/img/previousImg/general/pokal.jpg';
import img7Yeti from '../assets/img/previousImg/general/yeti.jpg';
import "../assets/css/bootstrap.min.css";
import "../assets/css/bootstrap-override.css";
import "../assets/css/style.css";
import "../assets/css/styleBody4.css";
import ImagesCarousel from './subcomponents/images-carousel';

export default class Body5 extends Component {
    
    render () {
        return (

            <div>

                <div  className='wrapper-outside-body relative offset-up-20'>

                    <div className='wrapper-outside-body relative overlay-1 full-width'>

                        <div className='d-none d-lg-block'>
                            <div className='relative offset-up-0 light-blue-separator-xs'></div>
                        </div>

                        <div className='d-xs-block d-lg-none'>
                            <div className='relative offset-up-0 light-blue-separator-md'></div>
                        </div>

                        <img src={bgMountains} className = "relative offset-up-1"  alt="Stylized mountains"/>

                        <div className=' absolute full-width offset-down-5 offset-right-0 center ' >
                            
                            <div className='col-10 '>

                                <div className='d-xs-block d-lg-none'>
                                    <Separator number={10} ></Separator>
                                </div>


                                <h2 className='title font-josefin text-white '>MORE IMPRESSIONS</h2>
                                <h5 className='font-poppins normal-text text-white' >from the past years</h5>

                            </div>

                        </div>

                        <div className='row justify-content-center relative offset-up-10' >
                            <div className='col-12'>
                                <div class="">
                                    <ImagesCarousel images={[img1Colors, img2Skier, img3Snowparty, img4Buffet, img5Twister, img6Pokal, img7Yeti]} intervalMs={4000}/>
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

                        <img src={bgMountains2} id="bg-mountains-end" className='absolute offset-down-3 offset-right-0' alt="Stylized mountains"/> 
                            
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

                            <div className='d-none d-lg-block'>
                                <Separator number={12} ></Separator>
                            </div>

                            <div className='row justify-content-center '>
                                <span className='small-text text-white blue-shadow'>© Copyright 2022 Snowdays. All Rights Reserved.</span>
                            </div>

                        </div>



                    </div>                    

                </div>

                </div>

                

            
        )
    }
}