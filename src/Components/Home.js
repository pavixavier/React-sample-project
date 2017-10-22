import React, { Component } from 'react';
import About from '../Container/About';

class Home extends Component{
    // constructor(){
    //     super()
    //     this.changeUserName=this.changeUserName.bind(this);
    // }

    // changeUserName(newName){

    // }

    render(){
        return(
            <div>
                <h1>This is my home page</h1>
                {/*<input type="text">Home Page Textbox</input>
                <button type="button" onClick>Home Button Click</button>*/}
                <About />
            </div>
        );
    }
}

export default Home;