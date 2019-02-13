import React, { Component } from 'react';
import axios from 'axios';
import "./Style.css";
import { Container, Row, Col,  } from 'reactstrap';


class ElderlyProductList extends Component {
    state = {
        products: []
    };

    componentDidMount() {
        console.log('/api/products/' + this.props.category);
        axios.get('/api/products/elderly').then(res => {
            this.setState({products: res.data});
        })
    }

    render() {
        return (
            
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                
                        {this.state.products.slice(0, 6).map((item, key) => (
                            <a target="_blank" key={key} href={item.url}>
                                <img src={item.image} key={key} />
                                <div>{item.item}</div>
                                <div>{item.category}</div>
                                <div>{item.price}</div>
                            </a>                             
                        ))}
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
            
        );
    }
}


export default ElderlyProductList;