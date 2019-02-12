import React, { Component } from "react";
import "./App.css";
import KidsProductList from "./components/KidsProductList";
import TeensProductList from "./components/TeensProductList";
import { Button } from 'reactstrap';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>GIFTBOT</h1> 
          <br />
          <h3>Easy gift ideas</h3>        
          </div>
            <br />
            <br />
            <br />
            <Button className="btnDark" color="dark">KIDS</Button>{' '}
            <Button className="btnDark" color="dark">TEENS</Button>{' '}
            <Button className="btnDark" color="dark">ELDERLY</Button>{' '}
            <br />
            <br />
            <br />
        <KidsProductList category="kids" /> 
        <TeensProductList category="teens" />
      </div>
      

      
    );
  }
}

export default App;
