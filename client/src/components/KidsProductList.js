import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col,  } from 'reactstrap';
import "./Style.css";

const style={
    color: 'green'
}

class KidsProductList extends Component {
    state = {
        products: []
    };

    componentDidMount() {
        console.log('/api/products/' + this.props.category);
        axios.get('/api/products/kids').then(res => {
            this.setState({products: res.data});
        })
    }

    render() {
        return (           
            <Container class="scrapeContainer">    
                <Row>  
                   
                        {this.state.products.slice(0, 6).map((item, key) => (
                        <Col md="4">
                            <a target="_blank" key={key} href={item.url}>
                                <img src={item.image} key={key} className='img-fluid'/>
                                <div style={style}>{item.item}</div>
                                <div>{item.category}</div>
                                <div>{item.price}</div>
                            </a>                             
                        </Col>
                        ))} 
                  
                </Row>
                                 
            </Container>
            
        );
    }
}


export default KidsProductList;