import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import KidsProductList from "./components/KidsProductList";
import TeensProductList from "./components/TeensProductList";
import ElderlyProductList from"./components/ElderlyProductList";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { Container, Row, Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav,
  NavItem, NavLink, UncontrolledDropdown, DropdownToggle, 
  DropdownMenu, DropdownItem, } from 'reactstrap';
import { Button } from 'reactstrap';
import Error from "./components/Error";


class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
          <Navbar color="info" light expand="md">
          <NavbarBrand href="/"><h1>GIFTBOT</h1></NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/savedSelections.js">Saved Selections</NavLink>
              </NavItem>
            </Nav>        
        </Navbar>
        <br />
        <br />
        <br />
      
          <Container>
            <Row>
                <Col>
                <Button color="dark">KIDS</Button>{' '}
                </Col>
                <Col>
                <Button color="dark">TEENS</Button>{' '}
                </Col>
                <Col>
                <Button color="dark">ELDERLY</Button>{' '}
                </Col>
            </Row>
          </Container>
          <br />
              <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/kidsproductlist" component={KidsProductList}  />
              <Route path="/teensproductlist" component={TeensProductList}  />
              <Route path="/elderlyproductlist" component={ElderlyProductList}  />   
              </Switch>
          </div>
         
        </BrowserRouter>
    );
  }
}

export default App;
