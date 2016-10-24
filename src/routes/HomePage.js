import React from 'react';
import { Button } from 'antd';
import { Row, Col } from 'antd';
import { Menu, Breadcrumb, Icon, Tooltip } from 'antd';
import './HomePage.less';

const ButtonGroup = Button.Group;

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }

  onCollapseChange() {
    this.setState({
    })
  }

  componentDidMount() {
    document.documentElement.style.height ="auto";
    document.documentElement.style.padding = "0";
    document.documentElement.style.margin = "0";
    document.body.style.height = "auto";
    document.body.style.padding = "0";
    document.body.style.margin = "0";
    document.getElementById('root').style.height = "auto";
    document.getElementById('root').style.overflowY = "visible";
  }

  render() {
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
          <div style={{ height: 1000 }}>
          </div>
        </div>
        <div className="ant-layout-footer">
          <Row>
            <Col xs={4} sm={4} md={4} lg={4}>
              <ul className="ant-footer-about">
                <li className="ant-footer-title">About</li>
                <li className="ant-footer-item"><a target="_blank" href="#">Team</a></li>
                <li className="ant-footer-item"><a target="_blank" href="#">Blog</a></li>
                <li className="ant-footer-item"><a target="_blank" href="#">Contact</a></li>
              </ul>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4}>
              <ul className="ant-footer-resource">
                <li className="ant-footer-title">Resource</li>
                <li className="ant-footer-item"><a target="_blank" href="#">Community</a></li>
                <li className="ant-footer-item"><a target="_blank" href="#">Tutorial</a></li>
                <li className="ant-footer-item"><a target="_blank" href="#">Documentation</a></li>
              </ul>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4}>
              <ul className="ant-footer-external">
                <li className="ant-footer-title">External</li>
                <li className="ant-footer-item"><a target="_blank" href="http://nodered.org">Node-RED</a></li>
              </ul>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12}>
              <ul className="ant-footer-rights">
                <br className="ant-footer-title" />
                <li>GoIoT © 2016</li>
                <li>
                  Made with <span style={{ color: "#e01515" }}>&hearts;</span> by <span className="ant-footer-item"><a target="_blank" href="https://linkgo.io">linkgo.io</a></span>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default HomePage;
