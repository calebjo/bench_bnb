import React from "react";
import { Link } from "react-router-dom";

export default class Greeting extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        const loggedIn = this.props.currentUser

        if (loggedIn){
            return (
                <div id="greeting">
                    <h1>Hello, {this.props.currentUser.username}.</h1>
                    <button onClick={this.props.logout}>Sign Out</button>
                </div>
            );
        } else {
            return (
            <div id="greeting">
                <Link to='/signup'>Sign Up</Link>
                <Link to='/login'>Log In</Link>
            </div>
            );
        }
    }
}