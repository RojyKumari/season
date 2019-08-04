import React from 'react';
import './style.css'


const Error = (props)=>{

    return (
        <div className="error-container">
         <h1>  {props.errorMessage} </h1> 
        </div>
    )
}

export default Error