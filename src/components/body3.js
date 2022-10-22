import React, { Component } from 'react';
import bgMountains from '../assets/img/mountains_illustration2.svg';
import LogosTable from './subcomponents/logos-table';
import ETHLogo from '../assets/img/participantsLogo/ETH_Zurich_Logo.jpg';
import FAULogo from '../assets/img/participantsLogo/friedrich-alexander-universitaet-fau-logo-b.jpg';
import FHLogo from '../assets/img/participantsLogo/Fachhochschule_Vorarlberg_logo.svg.png';
import FrankFurtLogo from '../assets/img/participantsLogo/download.png';
import HSBALogo from '../assets/img/participantsLogo/institutionlogo27650.png';
import IUBHLogo from '../assets/img/participantsLogo/Logo-IUBH.svg.png';
import LUTLogo from '../assets/img/participantsLogo/LUT Logo RGB.jpg';
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

                            <h2 className='h2 font-josefin '>PARTICIPANTS</h2>
                            <h5 className='font-josefin'>from the last edition</h5>

                            <div className='mt-5 pt-2'>
                                    <LogosTable logos = {[ETHLogo, FAULogo, FHLogo, FrankFurtLogo, HSBALogo,
                                 IUBHLogo, LUTLogo]}></LogosTable>

                            </div>
                            
                        </div>

                    </div>      

                </div>
                

            </div>
            
        )
    }
}