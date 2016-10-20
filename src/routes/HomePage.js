import React from 'react';
import { Button } from 'antd';
import { Row, Col } from 'antd';
import { Menu, Breadcrumb, Icon, Tooltip } from 'antd';
import './HomePage.less';

function HomePage() {
  return (
    <div className="ant-layout-top">
      <div className="ant-layout-header">
        <div className="ant-layout-wrapper">
          <Menu theme="light" mode="horizontal" style={{borderBottom: 'none'}}>
            <Menu.Item style={{borderBottom: 'none'}} key="1">导航一</Menu.Item>
            <Menu.Item style={{borderBottom: 'none'}} key="2">导航二</Menu.Item>
            <Menu.Item style={{borderBottom: 'none'}} key="3">导航三</Menu.Item>
          </Menu>
        </div>
      </div>
      <div className="ant-layout-container">
        <div style={{ height: 600 }}>
          <a href="/"><Button type="primary" style={{ marginTop: 5 }}>返回首页</Button></a>
        </div>
      </div>
      <div className="ant-layout-footer">
      Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持
      </div>
    </div>
  );
}

export default HomePage;
