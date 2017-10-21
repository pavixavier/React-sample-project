import React, { Component } from 'react';
import About from './About';

class Home extends Component{
    constructor(){
        super()
        this.changeUserName=this.changeUserName.bind(this);
    }

    changeUserName(newName){

    }

    render(){
        return(
            <div>
                <h1>This is my home page</h1>
                <About />
            </div>
        );
    }
}

export default Home;