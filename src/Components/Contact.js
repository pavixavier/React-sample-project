import React,  {Component} from 'react';

class Contact extends Component{
    render(){
        return(
            <div>
                <h1>This is contact</h1>
                <h2>This is from About page: {this.props.username}</h2>
            </div>
        );
    }
}

export default Contact;

