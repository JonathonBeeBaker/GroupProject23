import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import KidsProductList from "./components/KidsProductList";
import TeensProductList from "./components/TeensProductList";
import {BrowserRouter, Route} from "react-router-dom";
import { Container, Row, Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav,
  NavItem, NavLink, UncontrolledDropdown, DropdownToggle, 
  DropdownMenu, DropdownItem, } from 'reactstrap';
import { Button } from 'reactstrap';


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
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
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
          <Container>
            <Row>
              <Col>
                <Route path="/" component={Home} />
              </Col>
            </Row>
            <Row>
              <Col>
            <Route path="/kidsproductlist" component={KidsProductList} />
              </Col>
            </Row>
          </Container>
          </div>
         
        </BrowserRouter>
    );
  }
}

export default App;
