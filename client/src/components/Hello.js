import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

class Hello extends Component {
    state = {
        user: {}
    }
    handleLogout = (e) => {
        e.preventDefault();
        axios.get('/api/logout').then(()=>{
            this.setState({user: {}});
        });  
    }
    componentWillMount() {
        axios.get("/api/loggedIn").then(res => {
            if (res.data) {
                this.setState({user: res.data});
            }
        });
    }
    render() {
        return (
            <span>
            {this.state.user.username ? 
                <span>Welcome {this.state.user.username} <Link to="/login" onClick={this.handleLogout}>Logout</Link></span> : 
                <span>
                    <Link to="/login">Login</Link> or <Link to="/register">Register</Link>
                </span>}
            </span>
        );
    }
}

export default Hello;