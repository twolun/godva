import React from 'react';
import { Button } from 'antd';
import { Row, Col } from 'antd';
import { Menu, Breadcrumb, Icon, Tooltip } from 'antd';
import './HomePage.less';

const ButtonGroup = Button.Group;

function HomePage() {
  return (
		<div className="ant-layout-top">
      <div className="ant-layout-header">
        <div className="ant-layout-wrapper">
          <Row>
            <Col xs={6} sm={6} md={6} lg={6}>
              <div className="ant-header-logo">GoIoT</div>
            </Col>
            <Col xs={18} sm={18} md={18} lg={18}>
            <Menu theme="light" mode="horizontal" className="ant-header-menu">
              <Menu.Item key="1">Why GoIoT</Menu.Item>
              <Menu.Item key="2">Pricing</Menu.Item>
              <Menu.Item key="3">Explore</Menu.Item>
              <Menu.Item key="4" style={{borderBottom:'none'}}>
                <Button type="primary">Login<Icon type="down" /></Button>
              </Menu.Item>
            </Menu>
            </Col>
          </Row>
        </div>
      </div>
      <div className="ant-layout-container">
        <div style={{ height: 600 }}>
        </div>
      </div>
      <div className="ant-layout-footer">
        <Row>
          <Col xs={6} sm={6} md={6} lg={6}>
            <ul className="ant-footer-about">
              <li>About</li>
              <li className="ant-footer-item"><a href="#">reserved text 1</a></li>
              <li className="ant-footer-item"><a href="#">reserved text 2</a></li>
            </ul>
          </Col>
          <Col xs={6} sm={6} md={6} lg={6}>
            <ul className="ant-footer-resource">
              <li>Resource</li>
              <li className="ant-footer-item"><a href="#">resource 1</a></li>
              <li className="ant-footer-item"><a href="#">resource 2</a></li>
            </ul>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12}>
            <ul className="ant-footer-rights">
              <li>GoIoT © 2016</li>
              <li>Made with love by linkgo.io</li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default HomePage;
