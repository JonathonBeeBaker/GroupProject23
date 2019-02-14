import React , {Component} from "react";
import axios from "axios";
import {Redirect} from "react-router-dom";
import "./Style.css";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';   

class Register extends Component {
    state = {
        username: "",
        password: "",
        passwordConfirm: ""
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/register', this.state).then(res => {
            this.forceUpdate();
            this.props.history.push("/");
        }).catch(err => console.log(err));
    }
    render () {
        return (
            <div>
                <h1>Create an Account</h1>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input type="text" name="username" placeholder="username" onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" placeholder="********" onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Confirm Password</Label>
                        <Input type="password" name="passwordConfirm" placeholder="********" onChange={this.onChange} />
                    </FormGroup>
                    <Button>Register</Button>
                </Form>
               
            </div>
        )
        
    }

}




export default Register;