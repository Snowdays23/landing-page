import React, { Component } from 'react';
import Logo from './logo';
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/bootstrap-override.css";
import "../../assets/css/style.css";

function LogosTable ({logos}) {

        const table = logos.map((logo) => (
                <Logo img = {logo} >
                </Logo>)); 

        return (

            <div className = "container">

                <div className='row justify-content-center ' >

                    <div>
                        {table}
                    </div>
                    
                </div>

            </div>
            
        )
}

export default LogosTable;