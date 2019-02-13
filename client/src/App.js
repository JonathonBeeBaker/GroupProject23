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


class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
          <Navbar color="info" dark expand="md">
          <NavbarBrand href="/"><h1>GIFTBOT</h1></NavbarBrand>
          <br />
          <NavbarBrand href="/"><h5>Find The Perfect Gift</h5></NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
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
                  <Route path="/" component={Home} exact />
                  <Route path="/kidsproductlist" component={KidsProductList}  />
                  <Route path="/teensproductlist" component={TeensProductList}  />
                  <Route path="/elderlyproductlist" component={ElderlyProductList}  /> 
                  <Route component={Error} />  
                </Switch>
          </div>
         
        </BrowserRouter>
    );
  }
}

export default App;
