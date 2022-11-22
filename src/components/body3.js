import React, { Component } from 'react';
import bgMountains from '../assets/img/mountains_illustration2.svg';
import LogosTable from './subcomponents/logos-table';
import Bocconi from '../assets/img/participantsLogo/Bocconi.png';
import ESB from '../assets/img/participantsLogo/ESB.png';
import FS from '../assets/img/participantsLogo/Frankfurt_School.png';
import Maastricht from '../assets/img/participantsLogo/Maastricht_University.png';
import NOVA from '../assets/img/participantsLogo/NOVA.png';
import TUM from '../assets/img/participantsLogo/TUM.png';
import UNITN from '../assets/img/participantsLogo/UNITN.png';
import WHU from '../assets/img/participantsLogo/WHU.png';
import "../assets/css/bootstrap.min.css";
import "../assets/css/bootstrap-override.css";
import "../assets/css/style.css";
import "../assets/css/styleBody3.css";
import Separator from './subcomponents/separator';
export default class Body3 extends Component {


    render () {
        return (

            <div className = "wrapper-outside-body-blue relative offset-up-20">
                <img src={bgMountains} className='relative offset-up-15'  alt="Stylized mountains"/>

                <div className=' absolute  overlay-1 offset-up-0 offset-right-0 full-width wrapper-outside-body-blue pb-15'>

                    <div className='d-xs-block d-lg-none'>
                            <Separator number={15} ></Separator>
                    </div>


                    <div className='row justify-content-center'>

                        <div className='col-lg-6 col-10'>

                            <h2 className='h2 font-josefin title text-white'>PARTICIPANTS</h2>
                            <h5 className='font-poppins normal-text text-white'>some of the participating Business Schools & Universities from the past years</h5>

                        </div>

                    </div>

                    <Separator number={6} />

                    <div className='row justify-content-center'>

                        <div className='col-10 mt-5'>
                                    <LogosTable logos = {[Bocconi, ESB, FS, Maastricht, NOVA, TUM, UNITN, WHU]}></LogosTable>

                        </div>

                    </div>
     

                </div>

                <div className='relative blue-separator-sm'></div>

                <div className= "d-xs-block d-lg-none ">
                    <div className='relative blue-separator-md'></div>
                </div>
                

            </div>
            
        )
    }
}