import React, { Component } from 'react';
import Participant from './participant';
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/bootstrap-override.css";
import "../../assets/css/style.css";

function ParticipantTable ({universities}) {

        const table = universities.map((university) => (
                <Participant img = {university} >
                </Participant>)); 

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

export default ParticipantTable;