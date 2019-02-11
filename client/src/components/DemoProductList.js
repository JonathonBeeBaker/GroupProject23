import React, { Component } from 'react';
import axios from 'axios';

class DemoProductList extends Component {
    state = {
        products: []
    };

    componentDidMount() {
        axios.get('/api/products/' + this.props.category).then(res => {
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
                        const Greeting = () => <h1>Hello World today!</h1>;
                    </a>
                
                ))}
            </div>
        );
    }
}



export default DemoProductList;
