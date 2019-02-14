import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import KidsProductList from "./components/KidsProductList";
import TeensProductList from "./components/TeensProductList";
import ElderlyProductList from"./components/ElderlyProductList";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { Container, Row, Col, Navbar, NavbarBrand, Nav,
        NavItem, NavLink,  } from 'reactstrap';
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import Register from "./components/Register";
import Login from './components/Login';
import Hello from "./components/Hello";


class App extends Component {
 
  render() {
    return (
        <BrowserRouter>
          <Container>
          <Navbar color="info" dark expand="md">
          <NavbarBrand href="/"><h1>GIFTBOT</h1></NavbarBrand>
          <br />
          <NavbarBrand href="/"><h5>Find The Perfect Gift</h5></NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Hello />
                <NavLink href="/components/savedSelections.js">Saved Selections</NavLink>
              </NavItem>
            </Nav>        
        </Navbar>
        <br />
        <br />
        <br />
      
         
          <br />
              <Navigation />
              <br />
              <br />
              <br />
                
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/login" component={Login} exact />
                  <Route path="/register" component={Register} exact />
                  <Route path="/kidsproductlist" component={KidsProductList}  />
                  <Route path="/teensproductlist" component={TeensProductList}  />
                  <Route path="/elderlyproductlist" component={ElderlyProductList}  />
                  <Route component={Error} />  
                </Switch>
          </Container>
         
        </BrowserRouter>
    );
  }
}

export default App;
