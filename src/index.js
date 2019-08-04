import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './season';
import Loader from './loader';
import Error from './error';

class App extends React.Component{

    //initialises component
    constructor(props){
        super(props);

        console.log("component initialised");
        this.state = {
            lat : null,
            error : null
        }

    }


    //returning JSX

    render(){

        console.log("component rendered");

        if(this.state.error){
            return <Error errorMessage={this.state.error}/>
        }

        if(this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>
        }

        return <Loader />
    }

    //content visible on screen
    componentDidMount(){
        console.log("component is visible on screen");
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({
                    lat : position.coords.latitude
                })
            },
            error => {
                console.log(error);
                this.setState({
                    error: error.message
                })
            } 
        )
    }

    //component updates i.e. when component state changes
    componentDidUpdate(){
        console.log("state changed - component did update");
    }

    //when removed
    componentWillUnmount(){
        console.log(" component will unmount");
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));