import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';

class App extends Component {
  constructor(){
    super()


  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Please click on the link</h1>
        <Home />
      </div>
    );
  }
}

export default App;

/*import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component{
  constructor(){
    super();
  }
  
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
export default connect(mapStateToProps, mapDispatchToProps)(App);*/