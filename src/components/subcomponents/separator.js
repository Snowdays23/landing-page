import React, { Component } from 'react';
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/bootstrap-override.css";   

function Separator ({number}) {

    return (
        <div style={{width: '100vw', height: number + 'vw'}}>
        </div>
    )
    
}

export default Separator;
