import React, { Component } from 'react';
import axios from 'axios';
import ProductLink from './ProductLink';

class DemoProductList extends Component {
    state = {
        products: []
    };

    componentDidMount() {
        axios.get('/api/products/' + this.props.category).then(res => {
            this.setState({products: res.data});
        })
    }

    addToFavorites() {
        console.log('TODO: add to favorites');
    }

    render() {
        return (
            <div>
                {this.state.products.map((item, key) => (
                    <ProductLink item={item} key={key} onAddToFavorites={this.addToFavorites} />
                ))}
            </div>
        );
    }
}

export default DemoProductList;
