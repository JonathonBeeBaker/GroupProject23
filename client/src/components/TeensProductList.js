import React, { Component } from 'react';
import axios from 'axios';

class TeensProductList extends Component {
    state = {
        products: []
    };

    componentDidMount() {
        console.log('/api/products/' + this.props.category);
        axios.get('/api/products/teens' + this.props.category).then(res => {
            this.setState({products: res.data});
        })
    }

    render() {
        return (
            <div>
                {this.state.products.map((item, key) => (
                    <a target="_blank" key={key} href={item.url}>
                        <img src={item.image} key={key} />
                        <div>{item.item}</div>
                        <div>{item.category}</div>
                        <div>{item.price}</div>
                    </a>
                
                ))}
            </div>
        );
    }
}


export default TeensProductList;