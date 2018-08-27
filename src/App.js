import React, { Component } from 'react';
import logo from './logo.svg';
import { Button, Row, Col } from 'antd';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Button type="primary">Button</Button>
          <Row gutter={16}>
              <Col className="gutter-row" span={6}>
                  <div className="gutter-box">col-6</div>
              </Col>
              <Col className="gutter-row" span={6}>
                  <div className="gutter-box">col-6</div>
              </Col>
              <Col className="gutter-row" span={6}>
                  <div className="gutter-box">col-6</div>
              </Col>
              <Col className="gutter-row" span={6}>
                  <div className="gutter-box">col-6</div>
              </Col>
          </Row>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
