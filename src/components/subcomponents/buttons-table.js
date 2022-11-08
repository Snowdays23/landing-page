import React, { Component } from 'react';
import Button from './button';
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/bootstrap-override.css";
import "../../assets/css/style.css";

function ButtonsTable ({buttons, links}) {

        const table = buttons.map((button, index) => (
                <Button img = {button} link = {links[index]}>
                </Button>)); 

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

export default ButtonsTable;