import React from 'react';
import { Button } from 'antd';
import { Row, Col } from 'antd';
import { Affix, Menu, Breadcrumb, Icon, Tooltip } from 'antd';
import './HomePage.less';

const ButtonGroup = Button.Group;

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      affixed: true,
    };
  }

  render() {
    return (
      <div className="ant-layout-top">
        <Affix onChange={status => this.setState({affixed: !status})}>
        <div className={this.state.affixed ? "ant-layout-header-affixed" : "ant-layout-header"}>
          <Row>
            <Col xs={2} sm={2} md={2} lg={2} />
            <Col xs={4} sm={4} md={4} lg={4}>
              <div className="ant-header-logo">GoIoT</div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12}>
            <Menu theme={this.state.affixed ? "dark" : "light"} mode="horizontal" className="ant-header-menu">
              <Menu.Item style={{borderBottom: "none"}} key="1">Why GoIoT</Menu.Item>
              <Menu.Item style={{borderBottom: "none"}} key="2">Pricing</Menu.Item>
              <Menu.Item style={{borderBottom: "none"}} key="3">Explore</Menu.Item>
            </Menu>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4}>
              <div className="ant-header-button">
                <Button type="primary">Login<Icon type="down" /></Button>
              </div>
            </Col>
            <Col xs={2} sm={2} md={2} lg={2} />
          </Row>
        </div>
        </Affix>
        <div className="ant-layout-content">
          <div style={{ background: "#444", height: "100vh" }}></div>
          <div style={{ background: "#ddd", height: "100vh" }}></div>
          <div style={{ background: "#fff", height: "100vh" }}></div>
        </div>
        <div className="ant-layout-footer">
          <Row>
            <Col xs={3} sm={2} md={2} lg={2} />
            <Col xs={7} sm={4} md={4} lg={4}>
              <ul className="ant-footer-about">
                <li className="ant-footer-title">About</li>
                <li className="ant-footer-item"><a target="_blank" href="#">Team</a></li>
                <li className="ant-footer-item"><a target="_blank" href="#">Blog</a></li>
                <li className="ant-footer-item"><a target="_blank" href="#">Contact</a></li>
              </ul>
            </Col>
            <Col xs={7} sm={4} md={4} lg={4}>
              <ul className="ant-footer-resource">
                <li className="ant-footer-title">Resource</li>
                <li className="ant-footer-item"><a target="_blank" href="#">Community</a></li>
                <li className="ant-footer-item"><a target="_blank" href="#">Tutorial</a></li>
                <li className="ant-footer-item"><a target="_blank" href="#">Documentation</a></li>
              </ul>
            </Col>
            <Col xs={7} sm={4} md={4} lg={4}>
              <ul className="ant-footer-external">
                <li className="ant-footer-title">External</li>
                <li className="ant-footer-item"><a target="_blank" href="http://nodered.org">Node-RED</a></li>
              </ul>
            </Col>
            <Col xs={0} sm={2} md={4} lg={4} />
            <Col xs={24} sm={6} md={4} lg={4}>
              <ul className="ant-footer-rights">
                <br className="ant-footer-title" />
                <li>GoIoT © 2016</li>
                <li>
                  Made with <span style={{ color: "#e01515" }}>&hearts;</span> by <span className="ant-footer-item"><a target="_blank" href="https://linkgo.io">linkgo.io</a></span>
                </li>
              </ul>
            </Col>
            <Col xs={0} sm={2} md={2} lg={2} />
          </Row>
        </div>
      </div>
    );
  }
}

export default HomePage;
