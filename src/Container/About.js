import React, { Component } from 'react';
import { connect } from 'react-redux';
import Contact from '../Components/Contact';
import Main from '../Components/Main';
import User from '../Components/User';

class About extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <h1>This is my about page</h1>
                <Contact username={this.props.user.name} />
                <Main changeUserName={() => this.props.setName("This is success")} />
                <User username={this.props.user.name} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        setName: (name) => {
            dispatch({
                type: "SET_NAME",
                payload: name
            });
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(About);