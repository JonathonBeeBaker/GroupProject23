import React , {Component} from "react";

import "./Style.css";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from "axios";
   

class Login extends Component {
    state = {
        username: "",
        password: ""
      }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = (e) => {
        e.preventDefault();
        axios.post("/api/login", this.state).then(res => {
            this.setState(res.data);
            this.forceUpdate();
            this.props.history.push("/");
        });
    }
    render () {
        return (
            <div>
                <h1>Login</h1>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input name="username" type="text" placeholder="example" onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input name="password" type="password" placeholder="********" onChange={this.onChange} />
                    </FormGroup>
                    <Button>Login</Button>
                </Form>
               
            </div>
        );
        
    }

}




export default Login;