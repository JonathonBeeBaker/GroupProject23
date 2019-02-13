import React , {Component} from "react";

import "./Style.css";
import { Container, Row, Col, } from 'reactstrap';


   

class Login extends Component {
    state = {
        username: "",
        password: ""
      }; 
      onChange = Login => this.setState({ [e.target.name]: e.target.value });
      }
    render () {
        return (
            <div>
                
                <form>
                    <label> Name:
                        <input  type="Username" name="Username" value={this.state.username}/>
                    </label>
                    <br />
                    <label> Password:
                    <input type="password" value="Password" value={this.state.password}/>
                    </label>
                    <br />
                    <input type="submit" value="submit" />
                </form>
               
            </div>
        )
        
    }

}




export default Login;