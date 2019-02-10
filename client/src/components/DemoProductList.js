import React, { Component } from 'react';
import axios from 'axios';

class DemoProductList extends Component {
    state = {
        products: []
    };

    componentDidMount() {
        axios.get('/api/products/newparent').then(res => {
            this.setState({products: res.data});
        })
    }

    render() {
        return (
            <div>
                {this.state.products.map((item, key) => <div key={key}>{item.item}</div>)}
            </div>
        );
    }
}

export default DemoProductList;
