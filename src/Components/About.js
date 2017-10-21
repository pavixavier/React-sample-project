import React, { Component } from 'react';
import { connect } from 'react-redux';

class About extends Component{
    render(){
        return(
            <div>
                <h1>This is my about page</h1>
                {this.props.user.name}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        user: state.userReducer
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        setUser: (name) => {
            dispatch({
                type: "SET_NAME",
                payload: name
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(About);