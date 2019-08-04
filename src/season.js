import React from 'react';

import './style.css';

class SeasonDisplay extends React.Component{

    constructor(props){
        super(props);

        this.seasonConfig = {
            summer : {
                text : "Let's hit the beach ",
                icon : "sun icon"
            },
            winter : {
                text : "Burr, It's chilly ",
                icon : "snowflake icon"
            }
        }
    }

    getSeason(lat, month){

        var season = '';
        //lat > 0 == nothern hemisphere
        if(month > 3 && month < 9){
            season =  lat > 0 ? 'summer' : 'winter';
        }else {
            season =  lat > 0 ? 'winter' : 'summer';
        }
        return season;
    }


    render(){

        const season = this.getSeason(this.props.lat, new Date().getMonth());

        const {text, icon} = this.seasonConfig[season];

        return( 
        <div className={`season-container ${season}`}> 
           
                <i className= {`${icon}  massive icon-left`} />
                <h1>
            {text} 
            </h1> 

            <i className={`${icon}  massive icon-right`}/>
            
            
        </div>
        )
    }
}

export default SeasonDisplay;