import React, { Component } from 'react';
import logo from './logo.svg';
import { Layout, Menu, Breadcrumb } from 'antd';
import './App.css';

import Home from './components/home.js';

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
          <Layout className="layout">
              <Header>
                  <div className="logo" />
                  <Menu
                      theme="dark"
                      mode="horizontal"
                      defaultSelectedKeys={['1']}
                      style={{ lineHeight: '64px' }}
                  >
                      <Menu.Item key="1">nav 1</Menu.Item>
                      <Menu.Item key="2">nav 2</Menu.Item>
                      <Menu.Item key="3">nav 3</Menu.Item>
                  </Menu>
              </Header>
              <Content style={{ padding: '0 50px' }}>
                  <Breadcrumb style={{ margin: '16px 0' }}>
                      <Breadcrumb.Item>Home</Breadcrumb.Item>
                      <Breadcrumb.Item>List</Breadcrumb.Item>
                      <Breadcrumb.Item>App</Breadcrumb.Item>
                  </Breadcrumb>
                  <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                    Content
                    <Home />
                  </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                  Footer
              </Footer>
          </Layout>
      </div>
    );
  }
}

export default App;
