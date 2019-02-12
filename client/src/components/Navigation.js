import React from 'react';
import { NavLink } from "react-router-dom";
import { Container, Row, Col, Button } from 'reactstrap';
import "./Style.css";


const Navigation = () => {
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col>        
                    <NavLink to="/kidsproductlist"><Button outline color="success" size="lg">KIDS</Button></NavLink>
                </Col>
                
                <Col>     
                    <NavLink to="/teensproductlist"><Button outline color="primary" size="lg">TEENS</Button> </NavLink>
                </Col>
                <Col>   
                    <NavLink to="/elderlyproductlist"><Button outline color="secondary" size="lg">ELDERLY</Button></NavLink>
                </Col>  
                <Col></Col>   
            </Row>
        </Container>
        
           
    );

};



export default Navigation;

