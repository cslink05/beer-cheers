import React, {Component} from 'react';

class Home extends Component {
    state={
        user: {}
    }

    render(){
        return (
            <div className="container">
                <div className="titlebox">
                    <h1>beer cheers</h1>
                    <img src ="/img/cheers.svg" alt="beer" />
                </div>
                <div className="subtitle">
                    <p>Love beer? Live in Kansas City? Connect with others to share all the beer happenings in the KC Metro area!</p>
                </div>
                <div className="signupbutton">
                    <button>Sign Up</button>
                    <p>Already a member? <a>Log in</a></p>
                    
                </div>
            </div>
        )
    }

}

export default Home;

