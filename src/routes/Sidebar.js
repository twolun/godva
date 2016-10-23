import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, message } from 'antd';
import { Row, Col } from 'antd';
import { Menu, Breadcrumb, Icon, Tooltip } from 'antd';
import styles from './Sidebar.less';

const SubMenu = Menu.SubMenu;

class Ant extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onCollapseChange = this.onCollapseChange.bind(this);
    this.state = {
      collapse: true,
    };
  }

  onCollapseChange() {
    this.setState({
      collapse: !this.state.collapse,
    })
  }

  componentDidMount() {
    document.documentElement.style.height = "100%";
    document.body.style.height = "100%";
    document.getElementById('root').style.height = "100%";
    document.getElementById('root').style.overflowY = "hidden";
  }

  render() {
    return (
      <div className={this.state.collapse ? styles.ant_layout_aside + ' ' + styles.ant_layout_aside_collapse : styles.ant_layout_aside}>
        <aside className={styles.ant_layout_sider}>
          <div className={styles.ant_layout_logo}></div>
          <Menu mode="inline" theme="dark" defaultSelectedKeys={['dashboard']}>
            <Menu.Item key="profile">
              <Icon type="user" /><span className={styles.nav_text}>Profile</span>
            </Menu.Item>
            <Menu.Item key="dashboard">
              <Icon type="appstore-o" /><span className={styles.nav_text}>Dashboard</span>
            </Menu.Item>
            <Menu.Item key="ui">
              <Icon type="laptop" /><span className={styles.nav_text}>UI</span>
            </Menu.Item>
            <Menu.Item key="editor">
              <Icon type="edit" /><span className={styles.nav_text}>Editor</span>
            </Menu.Item>
            <Menu.Item key="info">
              <Icon type="info-circle-o" /><span className={styles.nav_text}>About</span>
            </Menu.Item>
          </Menu>
          <div className={styles.ant_aside_action} onClick={this.onCollapseChange}>
            {this.state.collapse ? <Icon type="right" /> : <Icon type="left" />}
          </div>
        </aside>
        <div className={styles.ant_layout_object}>
          <object style={{width:'100%',height:'100%'}} type='text/html' data={'http://docker-red-dev.accrete.org:8000/editor'} />
        </div>
      </div>
    );
  }
}

export default Ant;
